function addContentReducer(state, action) {
  switch (action.type) {
    case 'comment':
      return [...state, action.message];
    case 'replyToComment':
      return [...state.replies[action.target]].push(action.message);
    default:
      throw new Error();
  }
}

export default addContentReducer;
