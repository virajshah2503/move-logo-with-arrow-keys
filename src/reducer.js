const initialState = {
	speed : 2,
	left : 5,
	top : 5
};

const logoReducer = (state = initialState,action) => {

	let updateState = {...state};

	if(action.type === "MOVE_LEFT"){

		let leftPos = updateState.left - updateState.speed;

	    if (leftPos <= updateState.speed) {

	    	updateState.left = 5;

	    	return updateState;

	    } else if (leftPos > 5) {

	        updateState.left = leftPos;

	        return updateState;

	    }
	}else if(action.type === "MOVE_RIGHT"){

		let leftPos = updateState.left + updateState.speed;

		let distanceRight = 450 - leftPos;

		if(distanceRight <= updateState.speed){

			updateState.left = 445;

			return updateState;

		}else if(leftPos < 450){

			updateState.left = leftPos;

			return updateState;
		}
	}else if(action.type === "MOVE_UP"){

		let topPos = updateState.top - updateState.speed;

		if(topPos <= updateState.speed){

			updateState.top = 5;

			return updateState;

		} else if( topPos > 5) {

			updateState.top = topPos;

			return updateState;
		}

	}else if(action.type === "MOVE_DOWN"){

		let topPos = updateState.top + updateState.speed;

		let distanceDown = 450 - topPos;

		if(distanceDown <= updateState.speed){

			updateState.top = 445;

			return updateState;

		}else if(topPos < 445){

			updateState.top = topPos;

			return updateState;
		}
	}else if(action.type === "INCREASE_SPEED"){

		if(typeof action.value !== "undefined"){

			updateState.speed = action.value;
		}
	}

	return updateState;
};

export default logoReducer;