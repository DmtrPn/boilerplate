import counterStore from './counter/reducer';
import testStore from './testData/reducer';
import { createStore, combineReducers, compose} from 'redux';

const rootReducer = combineReducers({
    counterStore,
    testStore
});

// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//,


export default store;
