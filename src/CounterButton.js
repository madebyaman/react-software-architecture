import { useState } from 'react';
import { useContext } from 'react';
import { CounterContext } from './CounterContext';

const CounterButton = () => {
  const { click, increment } = useContext(CounterContext);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {click} times</p>
      <label>
        Increment by
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button onClick={() => increment(incrementBy)}>Click</button>
    </>
  );
};

export default CounterButton;
