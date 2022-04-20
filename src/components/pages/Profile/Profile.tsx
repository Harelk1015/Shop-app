/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
/* eslint-disable import/exports-last */
// eslint-disable-next-line import/no-cycle

import axios from 'axios';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReducersState } from '../../../state/reducers';
import * as actionCreators from '../../../state/reducers/actionCreator';
import ProfileView from './Profile.view';

// User

export interface User {
	readonly username: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
	favorites: number[];
	tokens: { token: string; _id: string }[];
	_id: number;
	cart: {
		parentId: number;
		_id: string;
		name: string;
		price: string;
		size: string;
		quantity: string;
		imageUrl: string;
	}[];
}

// Tickets

// eslint-disable-next-line import/exports-last
export interface Ticket {
	_id: number;
	ownerId: string;
	subject: string;
	email: string;
	message: string;
}

export type Tickets = Ticket[];

// Orders

interface Order {
	_id: number;
	ownerId: number;
	productsId: number[];
	total: number;
}

export type Orders = Order[];

// const ticket1: Ticket = {
// 	_id: 1,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 1',
// };

// const ticket2: Ticket = {
// 	_id: 2,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 2',
// };

// const ticket3: Ticket = {
// 	_id: 3,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 2',
// };

// const ticket4: Ticket = {
// 	_id: 4,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 2',
// };

// const ticket5: Ticket = {
// 	_id: 5,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 2',
// };

// const ticket6: Ticket = {
// 	_id: 6,
// 	email: 'harelk1015@gmail.com',
// 	message: 'ticket from user id 1',
// 	ownerId: 1,
// 	subject: 'ticket number 2',
// };

// const ticket7: Ticket = {
// 	_id: 7,
// 	email: 'asd@gmail.com',
// 	ownerId: 2,
// 	subject: 'Noder Neder',
// 	message:
// 		'אמא של יוני ממש זונה ויש לה תור ארוך לשירותי מין שלה , אני כבר מקום 30 בקיו ואני מקווה שיום אחד אמא שלו תקבל אותי ואני אשאיר לה טיפ מכובד',
// };

// export const tickets: Tickets = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7];

const Profile = () => {
	const dispacth = useDispatch();
	const [oldPassword, setOldPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [goodMessage, setGoodMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const { login } = bindActionCreators(actionCreators, dispacth);

	const user = auth.user;

	const [userFavorites, setUserFavorites] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			axios.get(process.env.REACT_APP_BACKEND_URL + '/auth/autologin').then((res) => {
				login(res.data.user);
			});
		}

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/user/get-favorites')
			.then((res) => setUserFavorites(res.data.userFavorites))
			.catch((err) => console.log(err.message));
	}, [auth.isAuth]);

	const changePasswordHandler = async () => {
		setLoading(true);

		try {
			const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/user/change-password', {
				oldPassword,
				newPassword,
			});

			setLoading(false);
			setErrorMessage('');
			setGoodMessage(res.data.message);
		} catch (err: any) {
			setLoading(false);
			setGoodMessage('');
			setErrorMessage(err.response.data.message);
		}
	};

	const orders: Orders = [
		{ _id: 1, ownerId: 1, productsId: [1, 2], total: 150 },
		{ _id: 2, ownerId: 1, productsId: [3, 4], total: 200 },
	];

	return (
		<ProfileView
			user={user}
			userFavorites={userFavorites}
			orders={orders}
			setOldPassword={setOldPassword}
			setNewPassword={setNewPassword}
			changePasswordHandler={changePasswordHandler}
			errorMessage={errorMessage}
			goodMessage={goodMessage}
			loading={loading}
		/>
	);
};

Profile.displayName = 'Profile';

export default Profile;
