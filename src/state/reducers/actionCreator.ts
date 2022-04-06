import { Dispatch } from 'redux';
import { User } from '../../components/pages/Profile/Profile';
import IAction, { ActionTypes } from './actionsTypes';

export const login = (user: User) => {
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
