// == Lib imports
import { useState } from 'react';
import PropTypes from 'prop-types';
// == Component import
import Score from '../Score';
import Button from '../Button';
import Form from '../Form';
// == Css imports
import './message.scss';

function Message({
  message, replyType, currentUser, incrementId,
}) {
  const {
    content, createdAt, score, user,
  } = message;

  const [isReplying, setIsReplying] = useState(false);
  const closeForm = () => {
    setIsReplying(!isReplying);
  };

  return (
    <div className="message">
      <div className="message__header">
        <img
          className="message__header__user-pic"
          src={user.image.png}
          alt={`${user.username}`}
        />
        <h2 className="comment__header__user__username">{user.username}</h2>
        <p className="message__header__user__createdAt">{createdAt}</p>
      </div>
      <p className="message__content">{content}</p>
      <div className="message__footer">
        <Score
          initialScore={score}
        />
        <Button
          type="button"
          text="Reply"
          action={() => setIsReplying(!isReplying)}
        />
      </div>
      {
        (isReplying) && (
          <Form
            replyType={replyType}
            currentUser={currentUser}
            incrementId={incrementId}
            closeForm={closeForm}
          />
        )
      }
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
  currentUser: PropTypes.shape({
    image: PropTypes.shape({
      png: PropTypes.string.isRequired,
      webp: PropTypes.string.isRequired,
    }).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  incrementId: PropTypes.func.isRequired,
};

export default Message;
