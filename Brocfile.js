var Funnel        = require('broccoli-funnel');
var mergeTrees    = require('broccoli-merge-trees');
var filterReact   = require('broccoli-react');
var transpile6To5 = require("broccoli-6to5-transpiler");
var browserify    = require('broccoli-browserify-cache');
var compileSass   = require('broccoli-sass');
var log           = require('broccoli-stew').log;
var debug         = require('broccoli-stew').debug;

var appJs = transpile6To5('app');
appJs = browserify(appJs, {
  entries: ['./router.js'],
  outputFile: 'assets/app.js'
});

var appHtml = new Funnel('app', {include: [/.html$/]});

var appCss = [
  'app/styles',
  'node_modules/bootstrap-sass/assets/stylesheets'
];
appCss = compileSass(appCss, 'app.scss', 'assets/app.css');

module.exports = mergeTrees([appHtml, appJs, appCss]);
