/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import Select from '../../ui/Select/Select';
import { User } from '../Profile/Profile';
import classes from './Cart.module.scss';

interface ICartView {
	user: User;
	quantity: number | undefined;
	setQuantity: React.Dispatch<React.SetStateAction<number | undefined>>;
	cartItemHandler: (quantity: number, id: string) => void;
}

const CartView: React.FC<ICartView> = ({ user, cartItemHandler }) => {
	let bodyContent: ReactNode;

	if (user.cart) {
		bodyContent = user.cart.map((product) => {
			return (
				<div key={product._id} className={classes.body__card}>
					<div className={classes.body__card__img}>
						<img
							src={product.imageUrl}
							alt={product.name}
							className={classes.body__card__img__view}
						/>
					</div>
					<div className={classes.body__card__text}>
						<h2 className={classes.body__card__text__view}>{product.name}</h2>
						<h2>{product.price} $</h2>
						<h2>{product.size}</h2>
						<div className={classes.body__card__text__quantitySelection}>
							<label htmlFor="quantity">quantity: </label>
							<Select
								_id={product._id}
								quantity={product.quantity}
								key={product._id}
								cartItemHandler={cartItemHandler}
							/>
						</div>
					</div>
					<p className={classes.body__card__x}>X</p>
				</div>
			);
		});
	} else {
		bodyContent = <p>no prods</p>;
	}

	return (
		<div className={classes.main}>
			<div className={classes.header}>
				<h1>Cart:</h1>
			</div>
			<div className={classes.body}>{bodyContent}</div>
			<div className={classes.total}>
				<div className={classes.total__header}>
					<h1>Total:</h1>
					<h1>123 $</h1>
				</div>
				<hr />
				<div className={classes.total__body}>
					<h2>Delivery: Free</h2>
					<h2>Tax: Free</h2>
				</div>
				<div className={classes.total__checkout}>
					<button className={classes.total__checkout__btn}>CHECKOUT</button>
				</div>
			</div>
		</div>
	);
};

CartView.displayName = 'CartView';

export default CartView;
