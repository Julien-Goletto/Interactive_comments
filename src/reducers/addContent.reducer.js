function addContentReducer(state, action) {
  const newState = [...state];
  switch (action.type) {
    case 'comment':
      return [...state, action.message];
    case 'reply':
      // return state.map((c) => ((c.id === action.target)
      //   ? c = {...c, replies: [...c.replies, action.message]}
      //   : c));
      newState.find((c) => ((c.id === action.target))).replies.push(action.message);
      return newState;
    default:
      throw new Error();
  }
}

export default addContentReducer;
