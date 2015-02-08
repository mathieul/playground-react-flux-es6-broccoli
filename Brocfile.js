var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var transpileES6 = require('broccoli-es6modules');
var to5Transpiler = require("broccoli-6to5-transpiler");
var concat = require('broccoli-sourcemap-concat');

var app = new Funnel('app');

var appJs = new Funnel(app, {
  include: [new RegExp(/.js$/)]
});
appJs = new transpileES6(appJs);
appJs = to5Transpiler(appJs);

var bowerJs = new Funnel('bower_components', {
  include: ['loader.js/loader.js']
});

var allJs = mergeTrees([bowerJs, appJs]);

allJs = concat(allJs, {
  outputFile: 'javascripts/bundle.js',
  inputFiles: ['loader.js/loader.js', '**/*.js']
});

var appHtml = new Funnel(app, {
  include: [new RegExp(/.html$/)]
});

module.exports = mergeTrees([appHtml, allJs]);
