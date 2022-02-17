export const CounterButtonClicked = (amount) => ({
  type: 'COUNTER_BUTTON_CLICKED',
  payload: {
    incrementBy: amount,
  },
});
