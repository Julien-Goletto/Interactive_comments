// == Lib imports
import PropTypes from 'prop-types';
// == Css imports
import './button.scss';

function Button({ text, action }) {
  return (
    <button
      type="button"
      className={`button button-${text.toLowerCase()}`}
      onClick={action}
    >{text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
