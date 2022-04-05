import React, { useState } from 'react';
import axios from 'axios';
import LoginView from './Login.view';

const Login = () => {
	const [emailState, setEmailState] = useState<string>('');
	const [passwordState, setPasswordState] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');

	const emailChangeHandler = (value: string) => setEmailState(() => value);
	const passwordChangeHandler = (value: string) => setPasswordState(() => value);
	const errorMessageChangeHandler = (value: string) => setErrorMessage(() => value);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		axios
			.post(
				'http://localhost:3030/auth/login',
				{
					email: emailState,
					password: passwordState,
				},
				{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
			)
			.then((res) => {
				console.log(res);
				localStorage.setItem('accessToken', res.data.data.accessToken);
				localStorage.setItem('refreshToken', res.data.data.refreshToken);
			})
			.catch((err) => {
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
		/>
	);
};

Login.displayName = 'Login';

export default Login;
