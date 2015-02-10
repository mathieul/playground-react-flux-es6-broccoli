import React from 'react';
import CommentBox from './comment-box';
import CommentForm from './comment-form';

export default React.createClass({
  render() {
    return (
      <div className="comments">
        <h2>Comments</h2>
        <CommentBox />
        <div className="col-md-6">
          <CommentForm />
        </div>
      </div>
    );
  }
});
