import * as actionTypes from './actionTypes.js';

const initialState = {
	left : 5,
	top : 5
};

const logoReducer = (state = initialState,action) => {

	let updateState = {...state};

	if(action.type === actionTypes.MOVE_LEFT){

		let leftPos = updateState.left - action.speed;

	    if (leftPos <= action.speed) {

	    	updateState.left = 5;

	    	return updateState;

	    } else if (leftPos > 5) {

	        updateState.left = leftPos;

	        return updateState;

	    }
	}else if(action.type === actionTypes.MOVE_RIGHT){

		let leftPos = updateState.left + action.speed;

		let distanceRight = 450 - leftPos;

		if(distanceRight <= action.speed){

			updateState.left = 445;

			return updateState;

		}else if(leftPos < 450){

			updateState.left = leftPos;

			return updateState;
		}
	}else if(action.type === actionTypes.MOVE_UP){

		let topPos = updateState.top - action.speed;

		if(topPos <= action.speed){

			updateState.top = 5;

			return updateState;

		} else if( topPos > 5) {

			updateState.top = topPos;

			return updateState;
		}
	}else if(action.type === actionTypes.MOVE_DOWN){

		let topPos = updateState.top + action.speed;

		let distanceDown = 450 - topPos;

		if(distanceDown <= action.speed){

			updateState.top = 445;

			return updateState;

		}else if(topPos < 445){

			updateState.top = topPos;

			return updateState;
		}
	}

	return updateState;
};

export default logoReducer;