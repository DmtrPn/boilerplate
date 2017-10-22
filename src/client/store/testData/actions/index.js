import { createActions } from 'redux-actions';

export const {getData} = createActions({'GET_DATA': (data) => data});
