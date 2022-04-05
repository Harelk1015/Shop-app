import { useState } from 'react';
import axios from 'axios';
import RegisterView from './Register.view';

const Register = () => {
	const [emailState, setEmailState] = useState<string>('');
	const [usernameState, setUsernameState] = useState<string>('');
	const [passwordState, setPasswordState] = useState<string>('');
	const [passwordConfirmState, setPasswordConfirmState] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');

	const emailChangeHandler = (value: string) => setEmailState(() => value);
	const usernameChangeHandler = (value: string) => setUsernameState(() => value);
	const passwordChangeHandler = (value: string) => setPasswordState(() => value);
	const errorMessageChangeHandler = (value: string) => setErrorMessage(() => value);
	const passwordConfirmChangeHandler = (value: string) => setPasswordConfirmState(() => value);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		axios
			.post('http://localhost:3030/auth/register', {
				email: emailState,
				password: passwordState,
				passwordConfirmation: passwordConfirmState,
				username: usernameState,
			})
			.then((res) => console.log(res))
			.catch((err) => {
				// console.log(err.response.data);
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
		/>
	);
};

Register.displayName = 'Register';

export default Register;
