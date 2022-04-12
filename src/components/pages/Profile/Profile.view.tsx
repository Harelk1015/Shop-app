/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Profile.module.scss';
// eslint-disable-next-line import/no-cycle
import { Orders } from './Profile';

interface IProps {
	user: {
		readonly _id: number;
		readonly username: string;
		readonly email: string;
		readonly password: string;
		readonly role: 'admin' | 'user';
		readonly favorites?: number[];
	};
	readonly userFavorites: { _id: string; imageUrl: string; name: string }[];
	// tickets: Tickets;
	orders: Orders;
}

const ProfileView: React.FC<IProps> = ({ user, orders, userFavorites }) => {
	const navigate = useNavigate();

	const [oldPassword, setOldPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');

	let ordersContent;
	let favoritesContent;

	if (orders.length === 0) {
		ordersContent = <p>You dont have any orders</p>;
	} else {
		ordersContent = orders.map((order) => {
			return (
				<div key={order._id} className={classes.profile__main__orders__order}>
					<p className={classes.profile__main___orders__order__link}>Order ID: {order._id}</p>
					<p className={classes.profile__main___orders__order__link}>Order Total: {order.total}$</p>
					<hr />
				</div>
			);
		});
	}

	if (!user.favorites) {
		favoritesContent = <p>You dont have any favorite items</p>;
	} else {
		favoritesContent = userFavorites.map((favorite: any) => {
			return (
				<div
					key={favorite._id}
					className={classes.profile__favorites}
					onClick={() => {
						navigate(`/product-page?_id=${favorite._id}`);
						window.scrollTo(0, 0);
					}}
				>
					<p className={classes.profile__orders__order__link}>{favorite.name}</p>
					<img
						className={classes.profile__main__favorites__img}
						src={favorite.imageUrl}
						alt={favorite.name}
					/>
					<hr />
				</div>
			);
		});
	}

	console.log(oldPassword);
	console.log(newPassword);

	return (
		<div className={classes.profile}>
			<div className={classes.profile__header}>
				<h1 className={classes.profile__header__text}>{`Hello, ${user.username}`}</h1>
			</div>
			<div className={classes.profile__main}>
				<div className={`${classes.profile__main__details} ${classes.card}`}>
					<h2 className={classes.profile__card__header}>My Details</h2>
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
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setOldPassword(event.target.value);
						}}
					/>
					<p className={classes.profile__main__password__text}>new password</p>
					<input
						className={classes.profile__main__input}
						type="password"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setNewPassword(event.target.value);
						}}
					/>
					<button className={classes.profile__main__btn} type="button">
						Submit
					</button>
				</div>
				<div className={`${classes.profile__main__orders} ${classes.card}`}>
					<h2 className={`${classes.profile__card__header}`}>My Orders</h2>
					{ordersContent}
				</div>
				<div className={`${classes.profile__main__favorites} ${classes.card}`}>
					<h2 className={`${classes.profile__card__header}`}>Favorites</h2>
					{favoritesContent}
				</div>
			</div>
		</div>
	);
};

ProfileView.displayName = 'ProfileView';

export default ProfileView;
