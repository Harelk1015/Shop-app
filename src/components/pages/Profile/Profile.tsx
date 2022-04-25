/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReducersState } from '../../../state/reducers';
import * as actionCreators from '../../../state/reducers/actionCreator';

import { Order, User } from '../../../utils/types';

import ProfileView from './Profile.view';

const Profile = () => {
	const dispacth = useDispatch();

	const [oldPassword, setOldPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [goodMessage, setGoodMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [userFavorites, setUserFavorites] = useState([]);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const { login } = bindActionCreators(actionCreators, dispacth);

	const user = auth.user;

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			axios
				.get(process.env.REACT_APP_BACKEND_URL + '/auth/autologin')
				.then((res) => {
					login(res.data.user);
				})
				.catch((err) => console.log(err.response.data.message));
		}

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/user/get-favorites')
			.then((res) => setUserFavorites(res.data.userFavorites))
			.catch((err) => console.log(err.response.data.message));
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

	const orders: Order[] = [
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
