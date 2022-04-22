import React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';

import classes from './Login.module.scss';

interface IProps {
	readonly errorMessage: string;
	readonly loading: boolean;
	readonly submitHandler: (e: React.FormEvent) => void;
	readonly emailChangeHandler: (value: string) => void;
	readonly passwordChangeHandler: (value: string) => void;
}

const LoginView: React.FC<IProps> = ({
	errorMessage,
	loading,
	submitHandler,
	emailChangeHandler,
	passwordChangeHandler,
}) => {
	return (
		<div className={classes.push}>
			<div className={classes.login}>
				<h1 className={classes.login__header}>Login</h1>
				<div className={classes.login__form}>
					<form>
						<label htmlFor="username">Email</label>
						<input
							type="email"
							name="email"
							onChange={(event) => {
								emailChangeHandler(event.target.value);
							}}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							onChange={(event) => {
								passwordChangeHandler(event.target.value);
							}}
						/>
						{errorMessage && <p className={classes.login__error}>{errorMessage}</p>}
						{loading ? (
							<LoadingSpinner />
						) : (
							<button
								type="button"
								className={classes.login__form__btn}
								onClick={submitHandler}
							>
								Submit
							</button>
						)}
						<Link className={classes.login__form__switch} to="/register">
							Switch to Register
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

LoginView.displayName = 'LoginView';

export default LoginView;
