// Atom is a individual state you want to share with Recoil
import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: [], // default value
});
