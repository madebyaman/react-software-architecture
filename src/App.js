import React from 'react';
import { RecoilRoot } from 'recoil';
import CounterButton from './CounterButton';
import { DisplayCount } from './DisplayCount';

const App = () => {
  return (
    <RecoilRoot>
      <h1>State Management</h1>
      <CounterButton />
      <DisplayCount />
    </RecoilRoot>
  );
};

export default App;
