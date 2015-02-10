import "6to5ify/polyfill";
import jQuery from "jquery";
global.jQuery = jQuery;
import "bootstrap-sass";
import React from 'react';
import {Route, Redirect, run, HistoryLocation} from 'react-router';
import Application from './components/application';
import Comments from './components/comments';
import About from './components/about';

run(
  <Route handler={Application}>
    <Route name="comments" handler={Comments} />
    <Route name="about" handler={About} />
    <Redirect to="comments" />
  </Route>,

  // HistoryLocation,
  Handler => React.render(<Handler />, document.getElementById('content'))
);
