import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../state/reducers/actionCreator';
import LoginView from './Login.view';

const Login = () => {
	const [emailState, setEmailState] = useState<string>('');
	const [passwordState, setPasswordState] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const emailChangeHandler = (value: string) => setEmailState(() => value);
	const passwordChangeHandler = (value: string) => setPasswordState(() => value);
	const errorMessageChangeHandler = (value: string) => setErrorMessage(() => value);

	const dispacth = useDispatch();
	const navigate = useNavigate();

	const { login } = bindActionCreators(actionCreators, dispacth);

	const submitHandler = (event: React.FormEvent) => {
		setLoading(true);
		event.preventDefault();

		axios
			.post(
				'https://harel-shop-backend.herokuapp.com/auth/login',
				{
					email: emailState,
					password: passwordState,
				},
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
			)
			.then((res) => {
				setLoading(false);
				localStorage.setItem('accessToken', res.data.data.accessToken);
				localStorage.setItem('refreshToken', res.data.data.refreshToken);
				login(res.data.data.user);
				navigate('/profile');
			})
			.catch((err) => {
				setLoading(false);
				errorMessageChangeHandler(err.response.data.message);
			});
	};

	return (
		<LoginView
			email={emailState}
			password={passwordState}
			emailChangeHandler={emailChangeHandler}
			passwordChangeHandler={passwordChangeHandler}
			submitHandler={submitHandler}
			errorMessage={errorMessage}
			loading={loading}
		/>
	);
};

Login.displayName = 'Login';

export default Login;
