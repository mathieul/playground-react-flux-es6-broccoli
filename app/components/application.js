import React from 'react';
import Router from 'react-router';

let {Link, RouteHandler, State} = Router;

export default React.createClass({
  mixins: [State],

  render() {
    let activeClass = (name) => {
      let isActive = this.isActive(name, this.props.params, this.props.query);
      return isActive ? 'active' : '';
    };

    return (
      <div className="application">
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className={activeClass('comments')}><Link to="comments">Comments</Link></li>
            <li className={activeClass('about')}><Link to="about">About</Link></li>
          </ul>
        </nav>

        <RouteHandler />
      </div>
    );
  }
});
