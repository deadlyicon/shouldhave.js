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

var ROOT = process.cwd()
if (ROOT.slice(-5) === '/docs'){
  ROOT = ROOT.slice(0, -5);
}

/**
 * Build.
 */

var jadeOptions = {
  pretty: false
}

var jadeLocals = {
  pathRoot: '/shouldhave.js',
  githubUrl: 'https://github.com/deadlyicon/shouldhave.js',
  files: [] // set near bottom of this file
};

var layout = function(files, metalsmith, done){

  var wrapInLayout = function(name, done){
    var data = files[name];
    var layout = data.layout;
    if (!layout) return done();
    layout = path.join(metalsmith.source(), layout)
    var locals = Object.assign({}, jadeLocals, data);
    delete locals.layout
    delete locals.stats
    locals.contents = data.contents.toString()

    var options = Object.assign({}, jadeOptions, {
      filename: layout
    })

    fs.readFile(layout, function(error, layoutContents){

      data.contents = compileJade(layoutContents.toString(), options)(locals)
      files[name] = data;
      done();
    });
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
    "_bootstrap",
    "_*",
    "_*.*",
    "_*.sass",
    "_*.jade"
  ])
  .use(sass({
    "outputStyle": "expanded"
  }))
  .use(jade(
    Object.assign({}, jadeOptions, {locals: jadeLocals})
  ))
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
});

