import React from 'react';
import CommentBox from './comment-box';
import CommentForm from './comment-form';

export default React.createClass({
  render() {
    return (
      <div className="application">
        <h1>Application</h1>
        <CommentBox />
        <div className="col-md-6">
          <CommentForm />
        </div>
      </div>
    );
  }
});
