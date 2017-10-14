import { handleActions, combineActions } from 'redux-actions';
import {increment, decrement} from '../actions/index';
const defaultState = { counter: 10 };

const reducer = handleActions({
    [combineActions(increment, decrement)]: changeCount
}, defaultState);

function changeCount(state, { payload: { amount } }) {
    return { ...state, counter: state.counter + amount};
}



export default reducer;