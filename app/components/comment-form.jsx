import React from 'react';
import commentBoxActions from '../actions/comment-box-actions';

export default React.createClass({
  getInitialState() {
    return {
      update: {}
    };
  },

  handleChange(event) {
    let keyValue = {update: this.state.update};
    keyValue.update[event.target.name] = event.target.value;
  },

  render() {
    return (
      <form onSubmit={this._updateCommentBoxText}>
        <div className="form-group">
          <label htmlFor="comment-form-text">Text</label>
          <input type="text"
                 id="comment-form-text"
                 name="text"
                 className="form-control"
                 placeholder="New comment text"
                 onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    );
  },

  _updateCommentBoxText(event) {
    event.preventDefault();
    commentBoxActions.updateText(this.state.update.text);
  }
});
