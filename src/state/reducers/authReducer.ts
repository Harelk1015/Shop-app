import IAction, { ActionTypes } from './actionsTypes';

const initialState = {
	isAuth: null,
	user: null,
};

export const authReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ActionTypes.LOGIN:
			return {
				...state,
				isAuth: true,
				user: action.payload,
			};
		case ActionTypes.LOGOUT:
			return {
				...state,
				isAuth: false,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;
