import dispatcher from '../dispatcher';
import commentBoxConstants from '../constants/comment-box-constants';

export default {
  updateText(text) {
    dispatcher.dispatch({
      actionType: commentBoxConstants.UPDATE_TEXT,
      text: text
    });
  }
};
