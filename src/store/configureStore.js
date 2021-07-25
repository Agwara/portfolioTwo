import { createStore, combineReducers, compose } from "redux";

import { pageUrlReducer } from "../reducer/pageUrl" 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
	const store = createStore(
		combineReducers({
			pageUrl: pageUrlReducer
    }),
    composeEnhancers()
	);
	return store;
};

export default configureStore;