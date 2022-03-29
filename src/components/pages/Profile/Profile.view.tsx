/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DUMMY_PRODUCTS } from '../ProductsPage/ProductsPage';
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
	const navigate = useNavigate();

	const [oldPassword, setOldPassword] = useState();
	const [newPassword, setNewPassword] = useState();

	let ordersContent;
	let favoritesContent;

	console.log(DUMMY_PRODUCTS);
	console.log(user.favoritesId);

	if (orders.length === 0) {
		ordersContent = <p>You dont have any orders</p>;
	} else {
		ordersContent = orders.map((order) => {
			return (
				<div key={order._id} className={classes.profile__orders__order}>
					<p className={classes.profile__orders__order__link}>Order ID: {order._id}</p>
					<p className={classes.profile__orders__order__link}>Order Total{order.total}</p>
					<hr />
				</div>
			);
		});
	}

	if (user.favoritesId.length === 0) {
		favoritesContent = <p>You dont have any favorite items</p>;
	} else {
		const favorites: any = [];

		user.favoritesId.forEach((id) => {
			favorites.push(DUMMY_PRODUCTS.find((prod) => prod._id === id));
		});

		favoritesContent = favorites.map((favorite: any) => {
			return (
				<div
					key={favorite._id}
					className={classes.profile__favorites}
					onClick={() => {
						navigate(`/ProductPage?_id=${favorite._id}`);
						window.scrollTo(0, 0);
					}}
				>
					<p className={classes.profile__orders__order__link}>{favorite.name}</p>
					<img
						className={classes.profile__favorites__img}
						src={favorite.imageUrl}
						alt={favorite.name}
					/>
					<hr />
				</div>
			);
		});
	}

	console.log(favoritesContent);

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
