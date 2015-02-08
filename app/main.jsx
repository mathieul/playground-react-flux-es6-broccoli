import React from 'react';
import Router from 'react-router';
import Application from 'components/application';
import Comments from 'components/comments';
import About from 'components/about';

let {Route, DefaultRoute} = Router;
let routes = (
  <Route handler={Application}>
    <Route name="comments" handler={Comments} />
    <Route name="about" handler={About} />
    <DefaultRoute handler={Comments} />
  </Route>
);

Router.run(routes, Handler => React.render(<Handler />, document.getElementById('content')));
