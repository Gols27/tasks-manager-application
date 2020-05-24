/* istanbul ignore file */
/* not in scope of Testing */

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

import { composeWithDevTools } from 'redux-devtools-extension';


const preLoadedState = {
    tasks: []
};

let middleware = [ReduxThunk];

// in dev, to connect store with dev-tools

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, preLoadedState, composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;