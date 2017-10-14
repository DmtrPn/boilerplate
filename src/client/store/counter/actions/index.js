import { createActions } from 'redux-actions';

export const {increment} = createActions({'INCREMENT': amount => ({ amount })});
export const {decrement} = createActions({'DECREMENT': amount => ({ amount: -amount })});

