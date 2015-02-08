import CommentBox from 'components/comment-box';

export default {
  start: function () {
    React.render(
      <CommentBox />,
      document.getElementById('content')
    );
  }
};
