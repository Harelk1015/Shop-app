/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import { User } from '../Profile/Profile';
import classes from './Cart.module.scss';

interface ICartView {
	user: User;
	quantityRef: React.MutableRefObject<number>;
}

const CartView: React.FC<ICartView> = ({ user, quantityRef }) => {
	let bodyContent: ReactNode;

	const cartProducts = user.cart;

	if (user.cart) {
		bodyContent = cartProducts.map((product) => {
			return (
				<div key={product._id} className={classes.body__card}>
					<img src={product.imageUrl} alt={product.name} />
					<h2>{product.name}</h2>
					<h2>{product.price}$</h2>
					<h2>{product.size}</h2>
					<div className={classes.body__card__quantitySelection}>
						<label htmlFor="cars">quantity</label>
						<select id="quantity" name="quantity" ref={quantityRef}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
				</div>
			);
		});
	} else {
		bodyContent = <p>no prods</p>;
	}

	console.log(bodyContent);

	return (
		<div className={classes.main}>
			<div className={classes.header}>
				<h1>Cart:</h1>
			</div>
			<div className={classes.body}>{bodyContent}</div>
			<div className={classes.total}> </div>
		</div>
	);
};

CartView.displayName = 'CartView';

export default CartView;
