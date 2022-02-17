import React from 'react';
import CounterButton from './CounterButton';
import { CounterProvider } from './CounterContext';

const App = () => {
  return (
    <CounterProvider>
      <h1>State Management</h1>
      <CounterButton />
    </CounterProvider>
  );
};

export default App;
