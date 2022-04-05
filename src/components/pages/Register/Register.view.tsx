import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Register.module.scss';

interface IProps {
	readonly submitHandler: (e: React.FormEvent) => void;
	readonly username: string;
	readonly email: string;
	readonly password: string;
	readonly passwordConfirm: string;
	readonly errorMessage: string;
	readonly usernameChangeHandler: (value: string) => void;
	readonly emailChangeHandler: (value: string) => void;
	readonly passwordChangeHandler: (value: string) => void;
	readonly passwordConfirmChangeHandler: (value: string) => void;
}

const RegisterView: React.FC<IProps> = ({
	submitHandler,
	username,
	email,
	password,
	passwordConfirm,
	errorMessage,
	usernameChangeHandler,
	emailChangeHandler,
	passwordChangeHandler,
	passwordConfirmChangeHandler,
}) => {
	return (
		<div className={classes.register}>
			<h1 className={classes.register__header}>Register</h1>
			<div className={classes.register__form}>
				<form>
					<label htmlFor="username">UserName</label>
					<input
						value={username}
						type="text"
						name="username"
						onChange={(event) => {
							usernameChangeHandler(event.target.value);
						}}
					/>
					<label htmlFor="e-mail">E-Mail</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(event) => {
							emailChangeHandler(event.target.value);
						}}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(event) => {
							passwordChangeHandler(event.target.value);
						}}
					/>
					<label htmlFor="password">Confirm Password</label>
					<input
						type="password"
						name="passwordConfirm"
						value={passwordConfirm}
						onChange={(event) => {
							passwordConfirmChangeHandler(event.target.value);
						}}
					/>
					{errorMessage && <p className={classes.register__error}>{errorMessage}</p>}
					<button className={classes.register__form__btn} onClick={submitHandler}>
						Submit
					</button>
					<Link className={classes.register__form__switch} to="/login">
						Switch to login
					</Link>
				</form>
			</div>
		</div>
	);
};

RegisterView.displayName = 'RegisterView';

export default RegisterView;
