import { useState } from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

function Comment({ comment }) {
  const {
    content, createdAt, score, user, replies,
  } = comment;
  return (
    <div className="comment">
      <div className="comment__header">
        <img className="comment__header__user_pic" src={user.image.png} alt={`${user.username}`} />
        <h2 className="comment__header__user__username">{user.username}</h2>
        <p className="comment__header__user__createdAt">{createdAt}</p>
      </div>
      <p className="comment__content">{content}</p>
      <div className="comment__footer">
        <div className="comment__footer__score">
          <button type="button" className="comment__footer__score__+" action="">+</button>
          <p className="comment__footer__score__display">{score}</p>
          <button type="button" className="comment__footer__score__-" action="">-</button>
        </div>
        <button type="button" className="comment__footer__reply" action="">Reply</button>
      </div>
    </div>
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
