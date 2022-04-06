import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RegisterView from './Register.view';

const Register = () => {
	const [emailState, setEmailState] = useState<string>('');
	const [usernameState, setUsernameState] = useState<string>('');
	const [passwordState, setPasswordState] = useState<string>('');
	const [passwordConfirmState, setPasswordConfirmState] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const emailChangeHandler = (value: string) => setEmailState(() => value);
	const usernameChangeHandler = (value: string) => setUsernameState(() => value);
	const passwordChangeHandler = (value: string) => setPasswordState(() => value);
	const errorMessageChangeHandler = (value: string) => setErrorMessage(() => value);
	const passwordConfirmChangeHandler = (value: string) => setPasswordConfirmState(() => value);

	const navigate = useNavigate();

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);

		axios
			.post('http://localhost:3030/auth/register', {
				email: emailState,
				password: passwordState,
				passwordConfirmation: passwordConfirmState,
				username: usernameState,
			})
			.then((res) => {
				console.log(res);
				setLoading(false);
				navigate('/login');
			})
			.catch((err) => {
				// console.log(err.response.data);
				setLoading(false);
				errorMessageChangeHandler(err.response.data.message);
			});
	};

	return (
		<RegisterView
			submitHandler={submitHandler}
			email={emailState}
			username={usernameState}
			password={passwordState}
			passwordConfirm={passwordConfirmState}
			passwordConfirmChangeHandler={passwordConfirmChangeHandler}
			usernameChangeHandler={usernameChangeHandler}
			emailChangeHandler={emailChangeHandler}
			passwordChangeHandler={passwordChangeHandler}
			errorMessage={errorMessage}
			loading={loading}
		/>
	);
};

Register.displayName = 'Register';

export default Register;
