/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { Order } from '../../../utils/types';

import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';

import classes from './Profile.module.scss';

interface IProps {
	readonly userFavorites: { _id: string; imageUrl: string; name: string }[];
	readonly orders: Order[];
	readonly errorMessage: string;
	readonly goodMessage: string;
	readonly loading: boolean;
	user: {
		readonly _id: number;
		readonly username: string;
		readonly email: string;
		readonly password: string;
		readonly role: 'admin' | 'user';
		readonly favorites?: number[];
	};
	readonly setOldPassword: React.Dispatch<React.SetStateAction<string>>;
	readonly setNewPassword: React.Dispatch<React.SetStateAction<string>>;
	readonly changePasswordHandler: () => Promise<void>;
}

const ProfileView: React.FC<IProps> = ({
	user,
	orders,
	userFavorites,
	errorMessage,
	goodMessage,
	loading,
	setNewPassword,
	setOldPassword,
	changePasswordHandler,
}) => {
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

	if (user.favorites?.length === 0) {
		favoritesContent = <p>You dont have any favorite items</p>;
	} else {
		favoritesContent = userFavorites.map((favorite: any) => {
			return (
				<Link
					to={`/product-page?_id=${favorite._id}`}
					key={favorite._id}
					className={classes.profile__main__favorites__view}
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<p className={classes.profile__main__favorites__link}>{favorite.name}</p>
					<img
						className={classes.profile__main__favorites__img}
						src={favorite.imageUrl}
						alt={favorite.name}
					/>
					<hr />
				</Link>
			);
		});
	}

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

					{goodMessage && !loading && (
						<p className={classes.profile__main__change__good}>{goodMessage}</p>
					)}
					{errorMessage && !loading && (
						<p className={classes.profile__main__change__error}>{errorMessage}</p>
					)}
					{loading ? (
						<LoadingSpinner />
					) : (
						<button
							className={classes.profile__main__btn}
							type="button"
							onClick={() => {
								changePasswordHandler();
							}}
						>
							Submit
						</button>
					)}
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
