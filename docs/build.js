var Metalsmith    = require('metalsmith');
var ignore        = require('metalsmith-ignore');
var sass          = require('metalsmith-sass');
var markdown      = require('metalsmith-markdown');
var codeHighlight = require('metalsmith-code-highlight');
var templates     = require('metalsmith-templates');

/**
 * Build.
 */

var metalsmith = Metalsmith(process.cwd())
  .source('./docs')
  .destination('./gh-pages')
  .clear(false)
  .metadata({
    "title": "shouldhave.js",
    "description": "Everything JavaScript should have :D"
  })
  .ignore([
    "_templates/*"
  ])
  .use(ignore([
    "_templates/*"
  ]))
  .use(sass({
    "outputStyle": "expanded"
  }))
  .use(markdown({}))
  .use(codeHighlight({}))
  .use(templates({
    "engine": "jade",
    "directory": "./docs/_templates"
  }))
  .use(sass({
    "outputStyle": "expanded"
  }))
  .build(function(err){
    if (err) throw err;
  });



// {
//   "source": "./docs",
//   "destination": "gh-pages",
//   "clean": false,
//   "ignore": [
//     "_templates/*"
//   ],
//   "metadata": {
//     "title": "shouldhave.js",
//     "description": "Everything JavaScript should have :D"
//   },
//   "plugins": {
//     "metalsmith-ignore": [
//       "_templates/*"
//     ],
//     "metalsmith-sass": {
//       "outputStyle": "expanded"
//     },
//     "metalsmith-markdown": {},
//     "metalsmith-code-highlight": {},
//     "metalsmith-templates": {
//       "engine": "jade",
//       "directory": "./docs/_templates"
//     }
//   }
// }





// /**
//  * Prompt plugin.
//  *
//  * @param {Object} files
//  * @param {Metalsmith} metalsmith
//  * @param {Function} done
//  */

// function ask(files, metalsmith, done){
//   var prompts = ['name', 'repository', 'description', 'license'];
//   var metadata = metalsmith.metadata();

//   async.eachSeries(prompts, run, done);

//   function run(key, done){
//     prompt('  ' + key + ': ', function(val){
//       metadata[key] = val;
//       done();
//     });
//   }
// }

// /**
//  * Template in place plugin.
//  *
//  * @param {Object} files
//  * @param {Metalsmith} metalsmith
//  * @param {Function} done
//  */

// function template(files, metalsmith, done){
//   var keys = Object.keys(files);
//   var metadata = metalsmith.metadata();

//   async.each(keys, run, done);

//   function run(file, done){
//     var str = files[file].contents.toString();
//     render(str, metadata, function(err, res){
//       if (err) return done(err);
//       files[file].contents = new Buffer(res);
//       done();
//     });
//   }
// }
