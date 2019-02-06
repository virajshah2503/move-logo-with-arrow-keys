const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter : 0
};

// Reducer

const rootReducer = (state = initialState,action) => {
	if(action.type === "INCREMENT_COUNTER"){
		return { counter : state.counter + 1};
	}else if (action.type === "ADD_COUNTER"){
		return { counter : state.counter + action.value };
	}
	return { counter : state.counter + 10};
};

// Store

const store = createStore(rootReducer);

// Subscription before dispatching an action to get notification in response to state change

store.subscribe( () => {
	console.log(store.getState())
});

// Dispatching

store.dispatch({
	type : 'INCREMENT_COUNTER'
});

store.dispatch({
	type : 'ADD_COUNTER',
	value : 10
});

store.dispatch({
	type : 'UNDEFINED'
});