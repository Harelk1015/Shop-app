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

export const cartReducer = (state = { cartLength: 0 }, action: IAction) => {
	switch (action.type) {
		case ActionTypes.ADDITEM:
			return {
				...state,
				cartLength: state.cartLength + 1,
			};
		case ActionTypes.SETCART:
			return {
				...state,
				cartLength: action.payload,
			};
		default:
			return state;
	}
};
