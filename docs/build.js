#!/usr/bin/env node --harmony

var Metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var sass          = require('metalsmith-sass');
var codeHighlight = require('metalsmith-code-highlight');
var templates     = require('metalsmith-templates');

/**
 * Build.
 */

console.time('built in')
var metalsmith = Metalsmith(process.cwd())
  .source('./docs')
  .destination('./gh-pages')
  .clean(false)
  .metadata({
    "title": "shouldhave.js",
    "description": "Everything JavaScript should have :D"
  })
  .ignore([
    "build.js",
    "_templates/*"
  ])
  .use(sass({
    "outputStyle": "expanded"
  }))
  .use(markdown())
  .use(codeHighlight())
  .use(templates({
    "engine": "jade",
    "directory": "./docs/_templates"
  }))
  .use(sass({
    "outputStyle": "expanded"
  }))
  .build(function(err){
    if (err) throw err;
    console.timeEnd('built in')
  });

