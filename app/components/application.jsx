import React from 'react';
import Router from 'react-router';

let {RouteHandler, Link} = Router;

export default React.createClass({
  render() {
    return (
      <div className="application">
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="comments">Comments</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </nav>

        <RouteHandler />
      </div>
    );
  }
});
