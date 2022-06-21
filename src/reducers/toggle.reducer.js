function toggleReducer(state, action) {
  switch (action.type) {
    case 'upvote':
      return state + 1;
    case 'downvote':
      return state - 1;
    default:
      throw new Error();
  }
}

export default toggleReducer;
