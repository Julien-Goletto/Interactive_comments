// == Lib imports
import { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
// == Css imports
import './score.scss';

function reducer(state, action) {
  switch (action.type) {
    case 'upvote':
      return state + 1;
    case 'downvote':
      return state - 1;
    default:
      throw new Error();
  }
}

function Score({ initialScore }) {
  const [score, dispatch] = useReducer(reducer, initialScore);
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
