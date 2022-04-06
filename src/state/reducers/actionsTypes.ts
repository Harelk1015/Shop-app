/* eslint-disable import/exports-last */

export enum ActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
}

interface LoginAction {
	type: ActionTypes.LOGIN;
	payload?: {
		readonly username: string;
		email: string;
		password: string;
		role: string;
		favorites: number[];
		tokens: { token: string; _id: string }[];
	};
}

interface LogoutAction {
	type: ActionTypes.LOGOUT;
	payload: null;
}

type IAction = LoginAction | LogoutAction;

export default IAction;
