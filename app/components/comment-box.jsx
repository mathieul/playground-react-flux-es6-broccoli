import React from 'react';
import dispatcher from '../dispatcher';
import commentBoxConstants from '../constants/comment-box-constants';

export default React.createClass({
  getInitialState() {
    return {
      title: "Hey There",
      text: "Hello, world! I am a CommentBox Yo!"
    };
  },

  render() {
    return (
      <p className="lead">
        <strong>{this.state.title}</strong>
        <br/>
        {this.state.text}
      </p>
    );
  },

  componentDidMount() {
    dispatcher.register(action => {
      if (action.actionType === commentBoxConstants.UPDATE_TEXT) {
        this.setState({text: action.text});
      }
    });
  }
});
