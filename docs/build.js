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

var metaData = {
  title:       "shouldhave.js",
  description: "Everything JavaScript should have :D",
  pathRoot:    '/shouldhave.js',
  githubUrl:   'https://github.com/deadlyicon/shouldhave.js',
  // fileNames: ['']
  // files: [{}]
};

var layout = function(files, metalsmith, done){

  var wrapInLayout = function(name, done){
    var data = files[name];
    var layout = data.layout;
    if (!layout) return done();
    layout = path.join(metalsmith.source(), layout)
    var locals = Object.assign({}, metaData, data);
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


var docFileNameToSrcFileName = function(docFileName){
  var matches = docFileName.match(/^(\w+)(-|\.)(\w+).html$/);
  return matches && matches[1]+(matches[2]==='-'?'#':'.')+matches[3]+'.js';
}



var metalsmith = Metalsmith(ROOT)
  .source('./docs')
  .destination('./gh-pages')
  .clean(false)
  .metadata(metaData)
  .ignore([
    "build.js",
    "_bootstrap",
    ".*",
    "_*",
    "_*.*",
    "_*.sass",
    "_*.jade"
  ])
  .use(sass({
    "outputStyle": "expanded"
  }))
  .use(jade(
    Object.assign({}, jadeOptions, {locals: metaData})
  ))
  .use(markdown())

  .use(function(files, metalsmith, done){
    // console.log('-->', Object.keys(files));
    var matchingFiles = [];
    Object.keys(files).forEach(function(fileName){
      console.log(fileName);

      var sourceFileName = docFileNameToSrcFileName(fileName)
      if (!sourceFileName) return;
      console.log(sourceFileName)
      // return metaData.fileNames.indexOf(fileName) != -1;
    });
    done()
  })
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



var loadFileContent = function(fileName, done){
  var file = {name: fileName};
  metaData.files[fileName] = file;
  fs.readFile(ROOT+'/src/'+fileName, function(error, contents){
    file.contents = contents;
    done();
  });
};

fs.readdir(ROOT+'/src', function(error, fileNames){
  metaData.fileNames = fileNames;
  metaData.files = {};
  asyncEach(fileNames, loadFileContent, build);
});

