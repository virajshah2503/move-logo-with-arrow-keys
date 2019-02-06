export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const INCREASE_SPEED = 'INCREASE_SPEED';

export const moveleft = (speed) => {
	return {
		type : MOVE_LEFT,
		speed : speed
	};
}

export const moveright = (speed) => {
	return {
		type : MOVE_RIGHT,
		speed : speed
	};
}
export const moveup = (speed) => {
	return {
		type : MOVE_UP,
		speed : speed
	};
}
export const movedown = (speed) => {
	return {
		type : MOVE_DOWN,
		speed : speed
	};
}

export const syncIncreaseSpeed = (value) => {
	return {
		type : INCREASE_SPEED,
		value : value
	};
};

export const increasespeed = (value) => {

	return dispatch => {
		setTimeout( () => {
			dispatch(syncIncreaseSpeed(value));
		},2000);
	};

}