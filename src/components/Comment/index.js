// == Lib imports
import { useState } from 'react';
import PropTypes from 'prop-types';
// == Component import
import Message from '../Message';

// == Css imports
import './comment.scss';

function Comment({ comment }) {
  const commentMessage = (({
    id, content, createdAt, score, user,
  }) => ({
    id, content, createdAt, score, user,
  }))(comment);
  const { replies: inititalReplies } = comment;
  const [replies, setReplies] = useState(inititalReplies);
  const replyToComment = () => {

  }
  return (
    <>
      <Message
        message={commentMessage}
        // replyType={}
        className="comment"
      />
      <div className="comment_replies">
        {
          (replies.length > 0) && replies.map((r) => (
            <Message
              message={r}
              className="comment__replies__reply"
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
      }),
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
};

export default Comment;
