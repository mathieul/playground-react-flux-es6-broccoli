import CommentBox from 'components/comment-box';
import CommentForm from 'components/comment-form';

React.render(
  <div className="application">
    <h1>Application</h1>
    <CommentBox />
    <div className="col-md-6">
      <CommentForm />
    </div>
  </div>,
  document.getElementById('content')
);
