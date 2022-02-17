import { useSelector, useDispatch } from 'react-redux';
import { getNumberOfClicks } from './selectors';
import { CounterButtonClicked } from './actions';
import { useState } from 'react';

const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberOfClicks);
  const dispatch = useDispatch();
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You clicked {numberOfClicks} times</p>
      <label>
        Increment by
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button onClick={() => dispatch(CounterButtonClicked(incrementBy))}>
        Click
      </button>
    </>
  );
};

export default CounterButton;
