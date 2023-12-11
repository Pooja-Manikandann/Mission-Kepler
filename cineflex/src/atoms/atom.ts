import { atom } from 'recoil';

export const errorMessageAtom = atom({
    key: 'errorMessageAtom',
    default: '',
});

export const timerAtom = atom({
    key: 'timerAtom',
    default: -2,
});
