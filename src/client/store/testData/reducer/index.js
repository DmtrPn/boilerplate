import { handleActions } from 'redux-actions';
import { getData } from '../actions';
const defaultState = { testData: 'testData' };

const reducer = handleActions({
    [getData]: getDataFromServer
}, defaultState);

function getDataFromServer(state, {payload}) {
    return {...state, testData: payload};
}

export default reducer;
