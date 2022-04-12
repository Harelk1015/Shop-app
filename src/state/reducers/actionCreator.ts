import { Dispatch } from 'redux';
import IAction, { ActionTypes } from './actionsTypes';

interface ILoginUser {
	readonly username: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
	favorites: number[];
	tokens: { token: string; _id: string }[];
	_id: number;
}

export const login = (user: ILoginUser) => {
	return (dispath: Dispatch<IAction>) => {
		dispath({
			type: ActionTypes.LOGIN,
			payload: user,
		});
	};
};

export const logout = () => {
	return (dispath: Dispatch<IAction>) => {
		dispath({
			type: ActionTypes.LOGOUT,
			payload: null,
		});
	};
};
