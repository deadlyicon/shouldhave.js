#!/usr/bin/env node --harmony

'use strict'

require('../src/Object.assign')

var fs            = require('fs');
var path          = require('path');
var asyncEach     = require('async').each;
var Metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var sass          = require('metalsmith-sass');
var codeHighlight = require('metalsmith-code-highlight');
var jade          = require('metalsmith-jade')
var compileJade   = require('jade').compile
// var templates     = require('metalsmith-templates');

var ROOT = process.cwd()

/**
 * Build.
 */

var jadeLocals = {
  files: [] // set near bottom of this file
};

var layout = function(files, metalsmith, done){

  var wrapInLayout = function(name, done){
    var data = files[name];
    var layout = data.layout;
    if (!layout) return done();
    layout = path.join(ROOT, metalsmith._source, layout)
    var locals = Object.assign({}, jadeLocals, data);
    delete locals.layout
    delete locals.stats
    locals.contents = data.contents.toString()
    // console.log(name, layout, locals)

    fs.readFile(layout, function(error, layoutContents){
      data.contents = compileJade(layoutContents.toString(), {})(locals)
      files[name] = data
      done()
    });

    // read ROOT+'/docs/'+data.layout

    // // render
    // var contents = compileJade(data.contents.toString(), opts)(locals)

    // // convert to a buffer
    // data.contents = new Buffer(contents)

    // // remove from global files object
    // delete files[name]

    // // assign the newly created file
    // files[name] = data
  };
  asyncEach(Object.keys(files), wrapInLayout, done);
};

var metalsmith = Metalsmith(ROOT)
  .source('./docs')
  .destination('./gh-pages')
  .clean(false)
  .metadata({
    "title": "shouldhave.js",
    "description": "Everything JavaScript should have :D"
  })
  .ignore([
    "build.js",
    "_*.jade"
  ])
  .use(sass({
    "outputStyle": "expanded"
  }))
  .use(jade({
    pretty: false,
    locals: jadeLocals
  }))
  .use(markdown())
  .use(layout)
  .use(codeHighlight())
  .use(sass({
    "outputStyle": "expanded"
  }))


var build = function(){
  console.time('built in')
  metalsmith.build(function(err){
    if (err) throw err;
    console.timeEnd('built in')
  })
};


fs.readdir(ROOT+'/src', function(error, files){
  jadeLocals.files = files
  build()
})

