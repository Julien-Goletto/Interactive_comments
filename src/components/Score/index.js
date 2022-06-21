// == Lib imports
import { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
// == Css imports
import './score.scss';
// == Import reducer
import toggleReducer from 'src/reducers/toggle.reducer';

function Score({ initialScore }) {
  const [score, dispatch] = useReducer(toggleReducer, initialScore);
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <div className="score">
      <button
        type="button"
        className="score__upvote"
        onClick={() => (!hasVoted) && (dispatch({ type: 'upvote' }), setHasVoted(true))}
      >+
      </button>
      <p className="score__display">{score}</p>
      <button
        type="button"
        className="score__downvote"
        onClick={() => (!hasVoted) && (dispatch({ type: 'downvote' }), setHasVoted(true))}
      >-
      </button>
    </div>
  );
}

Score.propTypes = {
  initialScore: PropTypes.number.isRequired,
};

export default Score;
