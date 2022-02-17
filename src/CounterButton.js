import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const CounterButton = observer(({ counter }) => {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You clicked {counter.numberOfClicks} times</p>
      <label>
        Increment by
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button onClick={() => counter.increment(incrementBy)}>Click</button>
    </>
  );
});

export default CounterButton;
