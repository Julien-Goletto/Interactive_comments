/* eslint-disable jsx-a11y/label-has-associated-control */
// == Lib imports
import PropTypes from 'prop-types';
import { useState } from 'react';
// == Css imports
import './form.scss';
// == Component import
import Button from '../Button';

function Form({
  replyType, currentUser, closeForm, incrementId,
}) {
  const [textInput, setTextInput] = useState('');
  const replyPattern = {
    id: 453564,
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
        e.preventDefault();
        const reply = { ...replyPattern };
        reply.content = textInput;
        replyType({ type: 'comment', message: reply });
        incrementId();
        closeForm();
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
  replyType: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    image: PropTypes.shape({
      png: PropTypes.string.isRequired,
      webp: PropTypes.string.isRequired,
    }).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  closeForm: PropTypes.func.isRequired,
  incrementId: PropTypes.func.isRequired,
};

export default Form;
