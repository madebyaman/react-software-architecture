import { useRecoilState } from 'recoil';
import { counterState } from './counterState';
import { incrementByState } from './incrementByState';

const CounterButton = () => {
  const [clickData, setClickData] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  return (
    <>
      <label>
        Increment by
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
        />
      </label>
      <button
        onClick={() =>
          setClickData([
            ...clickData,
            { timestamp: Date.now(), amount: incrementBy },
          ])
        }
      >
        Click
      </button>
    </>
  );
};

export default CounterButton;
