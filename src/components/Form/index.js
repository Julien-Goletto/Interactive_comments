/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Lib imports
import PropTypes from 'prop-types';
import { useState } from 'react';
// == Css imports
import './form.scss';
// == Component import
import Button from '../Button';

function Form({
  messageType, commentId, author, commentOrReply, currentUser, closeForm, incrementId, getLastId,
}) {
  const [textInput, setTextInput] = useState('');
  const [isSent, setIsSent] = useState(false);
  const replyPattern = {
    content: '',
    createdAt: 'Less than a minute ago',
    score: 0,
    user: currentUser,
    replies: [],
  };

  const { image: { png }, username } = currentUser;

  return (
    <form
      className="reply"
      onSubmit={(e) => {
        if (!isSent) {
          e.preventDefault();
          const id = getLastId() + 1;
          console.log(id);
          const message = {
            id: id, ...replyPattern, content: `@${`${author} ${textInput}`}`,
          };
          if (author) {
            message.replyingTo = author;
          }
          commentOrReply({ type: messageType, message: message, target: commentId });
          incrementId();
          setIsSent(!isSent);
          closeForm();
        }
      }}
    >
      <label className="reply__label">
        <img
          className="reply__label__user-pic"
          src={png}
          alt={`${username}`}
        />
        <input
          className="reply__label__textInput"
          placeholder="Write your message..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <Button
          type="submit"
          text="Reply"
          action={() => console.log('Form envoyé')}
        />
      </label>
    </form>
  );
}

Form.propTypes = {
  messageType: PropTypes.string.isRequired,
  commentId: PropTypes.number,
  author: PropTypes.string.isRequired,
  commentOrReply: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    image: PropTypes.shape({
      png: PropTypes.string.isRequired,
      webp: PropTypes.string.isRequired,
    }).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  closeForm: PropTypes.func.isRequired,
  incrementId: PropTypes.func.isRequired,
  getLastId: PropTypes.func.isRequired,
};

export default Form;
