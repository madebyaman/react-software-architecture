import { useState } from 'react';

const CounterButton = () => {
  const [click, setClick] = useState(0);
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
      <button onClick={() => setClick((click) => click + incrementBy)}>
        Click
      </button>
    </>
  );
};

export default CounterButton;
