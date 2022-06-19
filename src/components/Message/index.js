// == Lib imports
import { useState } from 'react';
import PropTypes from 'prop-types';
// == Component import
import Score from '../Score';
import Button from '../Button';
// == Css imports
import './message.scss';

function Message({ message, replyType }) {
  const {
    content, createdAt, score, user,
  } = message;

  return (
    <div className="message">
      <div className="message__header">
        <img className="message__header__user_pic" src={user.image.png} alt={`${user.username}`} />
        <h2 className="comment__header__user__username">{user.username}</h2>
        <p className="message__header__user__createdAt">{createdAt}</p>
      </div>
      <p className="message__content">{content}</p>
      <div className="message__footer">
        <Score
          initialScore={score}
        />
        <Button
          text="Edit"
          action={() => replyType()}
        />
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
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
  }).isRequired,
  replyType: PropTypes.func.isRequired,
};

export default Message;
