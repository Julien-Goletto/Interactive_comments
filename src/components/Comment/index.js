// == Lib imports
import PropTypes from 'prop-types';
// == Component import
import Message from '../Message';

// == Css imports
import './comment.scss';

function Comment({
  comment, currentUser, reply, incrementId,
}) {
  const commentMessage = (({
    id, content, createdAt, score, user,
  }) => ({
    id, content, createdAt, score, user,
  }))(comment);
  const { replies } = comment;
  return (
    <>
      <Message
        className="comment"
        message={commentMessage}
        currentUser={currentUser}
        replyType={reply}
        incrementId={incrementId}
      />
      <div className="comment_replies">
        {
          (replies.length > 0) && replies.map((r) => (
            <Message
              key={r.id}
              className="comment__replies__reply"
              message={r}
              currentUser={currentUser}
              // replyType={reply({ type: 'comment', })}
              incrementId={incrementId}
            />
          ))
        }
      </div>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    user: PropTypes.shape({
      image: PropTypes.shape({
        png: PropTypes.string.isRequired,
        webp: PropTypes.string.isRequired,
      }).isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        user: PropTypes.shape({
          image: PropTypes.shape({
            png: PropTypes.string.isRequired,
            webp: PropTypes.string.isRequired,
          }),
          username: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({
    image: PropTypes.shape({
      png: PropTypes.string.isRequired,
      webp: PropTypes.string.isRequired,
    }).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  reply: PropTypes.func.isRequired,
  incrementId: PropTypes.func.isRequired,
};

export default Comment;
