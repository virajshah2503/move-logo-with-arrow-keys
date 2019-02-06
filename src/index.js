import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logoReducer from './logoReducer.js';
import controlSpeedReducer from './controlSpeedReducer.js';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	movement : logoReducer,
	control : controlSpeedReducer
});

const userStepsLogger = store => {
	return next => {
		return action => {
			console.log("Middleware Dispatching ", action);

			const result = next(action);

			console.log("Middleware Next State ",store.getState());

			return result;
		}
	}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(userStepsLogger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
