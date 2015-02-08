import React from 'react';
import Router from 'react-router';
import Application from 'components/application';
import Comments from 'components/comments';
import About from 'components/about';

let {Route, Redirect} = Router;

Router.run(
  <Route handler={Application}>
    <Route name="comments" handler={Comments} />
    <Route name="about" handler={About} />
    <Redirect to="comments" />
  </Route>,

  Router.HistoryLocation,
  Handler => React.render(<Handler />, document.getElementById('content'))
);
