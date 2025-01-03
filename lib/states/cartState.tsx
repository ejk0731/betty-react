import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: 0,
});

export const optionState = atom({
  key: 'optionState',
  default: false,
});
