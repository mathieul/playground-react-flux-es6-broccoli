import CommentBox from 'components/comment-box';

export default {
  start: function () {
    React.render(
      <div className="application">
        <h1>Application</h1>
        <CommentBox />
      </div>,
      document.getElementById('content')
    );
  }
};
