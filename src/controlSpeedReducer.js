import * as actionTypes from './actionTypes.js';

const initialState = {
	speed : 2
};

const controlSpeedReducer = (state = initialState,action) => {

	let updateState = {...state};

	if(action.type === actionTypes.INCREASE_SPEED){

		if(typeof action.value !== "undefined"){

			updateState.speed = action.value;
		}
	}

	return updateState;
};

export default controlSpeedReducer;