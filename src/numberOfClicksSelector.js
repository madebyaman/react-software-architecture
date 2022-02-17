import { selector } from 'recoil';
import { counterState } from './counterState';

export const numberOfClicksSelector = selector({
  key: 'numberOfClicksSelector',
  get: ({ get }) => {
    const clicks = get(counterState);
    const totalClicks = clicks.reduce((sum, click) => sum + click.amount, 0);
    return totalClicks;
  },
});
