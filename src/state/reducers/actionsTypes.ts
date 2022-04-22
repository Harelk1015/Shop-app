/* eslint-disable import/exports-last */

export enum ActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
	ADDITEM = 'ADDITEM',
	SETCART = 'SETCART',
}

interface LoginAction {
	type: ActionTypes.LOGIN;
	payload?: {
		readonly username: string;
		readonly email: string;
		readonly password: string;
		readonly role: 'admin' | 'user';
		readonly favorites: number[];
		readonly tokens: { token: string; _id: string }[];
		readonly _id: number;
		readonly cart: {
			_id: string;
			name: string;
			price: string;
			size: string;
			quantity: string;
			imageUrl: string;
		};
	};
}

interface LogoutAction {
	type: ActionTypes.LOGOUT;
	payload: null;
}

interface AddToCartAction {
	type: ActionTypes.ADDITEM;
	payload: null;
}

interface SetCartAction {
	type: ActionTypes.SETCART;
	payload: number;
}

type IAction = LoginAction | LogoutAction | AddToCartAction | SetCartAction;

export default IAction;
