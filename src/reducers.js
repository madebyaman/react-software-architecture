// How state changes when an action happen?
export const numberOfClicksReducer = (state = 0, action) => {
  switch (action.type) {
    case 'COUNTER_BUTTON_CLICKED':
      return state + action.payload.incrementBy;
    default:
      return state;
  }
};
