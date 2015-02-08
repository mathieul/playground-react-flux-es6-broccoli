var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var filterReact = require('broccoli-react');
var transpileES6 = require('broccoli-es6modules');
var to5Transpiler = require("broccoli-6to5-transpiler");
var concat = require('broccoli-sourcemap-concat');
var compileSass = require('broccoli-sass');
var log = require('broccoli-stew').log;

var app = new Funnel('app');

var appHtml = new Funnel(app, {
  include: [/.html$/]
});

var appCss = [
  'app/styles',
  'bower_components/bootstrap-sass-official/assets/stylesheets'
];
appCss = compileSass(appCss, 'app.scss', 'assets/app.css');

var appJs = new Funnel(app, {
  include: [/.jsx?$/]
});
appJs = filterReact(appJs);
// appJs = log(appJs);
appJs = new transpileES6(appJs);
appJs = to5Transpiler(appJs);

var bowerJs = new Funnel('bower_components', {
  include: [
    'loader.js/loader.js',
    'react/react.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js'
  ]
});

var allJs = mergeTrees([bowerJs, appJs]);

allJs = concat(allJs, {
  outputFile: 'assets/app.js',
  inputFiles: ['loader.js/loader.js', '**/*.js']
});

module.exports = mergeTrees([appHtml, appCss, allJs]);
