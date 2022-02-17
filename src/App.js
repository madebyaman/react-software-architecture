import React from 'react';
import { Provider } from 'react-redux';
import CounterButton from './CounterButton';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <h1>State Management</h1>
      <CounterButton />
    </Provider>
  );
};

export default App;
