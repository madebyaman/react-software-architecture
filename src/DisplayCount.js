import { useRecoilValue } from 'recoil';
import { numberOfClicksSelector } from './numberOfClicksSelector';

export const DisplayCount = () => {
  const clicksData = useRecoilValue(numberOfClicksSelector);

  return <p>Number of clicks = {clicksData}</p>;
};
