import { createContext } from 'react';
import { useState } from 'react';

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const [click, setClicks] = useState(0);
  const increment = (amount = 1) => {
    setClicks(click + amount);
  };

  return (
    <CounterContext.Provider value={{ click, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
