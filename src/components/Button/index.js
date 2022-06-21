// == Lib imports
import PropTypes from 'prop-types';
// == Css imports
import './button.scss';

function Button({ type, text, action }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`button button-${text.toLowerCase()}`}
      onClick={action}
    >{text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
