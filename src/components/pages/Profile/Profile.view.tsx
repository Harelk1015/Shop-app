/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import classes from './Profile.module.scss';
// eslint-disable-next-line import/no-cycle
import { Orders } from './Profile';

interface ProfileViewProps {
	user: {
		_id: number;
		username: string;
		email: string;
		password: string;
		role: 'admin' | 'user';
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		favoritesId: any[];
	};
	// tickets: Tickets;
	orders: Orders;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, orders }) => {
	const [oldPassword, setOldPassword] = useState();
	const [newPassword, setNewPassword] = useState();

	console.log(oldPassword);
	console.log(newPassword);

	return (
		<div className={classes.profile}>
			<div className={classes.profile__header}>
				<h1 className={classes.profile__header__text}>{`Hello, ${user.username}`}</h1>
			</div>
			<div className={classes.profile__main}>
				<div className={`${classes.profile__main__details} ${classes.card}`}>
					<h2 className={classes.profile__card__header}>My details</h2>
					<h4>
						<span className={classes.profile__underline}>username:</span> {user.username}
					</h4>
					<h4>
						<span className={classes.profile__underline}>email:</span> {user.email}
					</h4>
				</div>
				<div className={`${classes.profile__main__password} ${classes.card}`}>
					<h2 className={classes.profile__card__header}>Change Password</h2>
					<p className={classes.profile__main__password__text}>old password</p>
					<input
						className={classes.profile__main__input}
						type="password"
						onChange={(event: any) => {
							setOldPassword(event.target.value);
						}}
					/>
					<p className={classes.profile__main__password__text}>new password</p>
					<input
						className={classes.profile__main__input}
						type="password"
						onChange={(event: any) => {
							setNewPassword(event.target.value);
						}}
					/>
				</div>
				<div className={`${classes.profile__main__orders} ${classes.card}`}>
					<h2 className={`${classes.profile__card__header}`}>My orders</h2>
					{orders.map((order) => {
						return (
							<div key={order._id} className={classes.profile__orders__order}>
								<p>{order._id}</p> <p>{order.total}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

ProfileView.displayName = 'ProfileView';

export default ProfileView;
