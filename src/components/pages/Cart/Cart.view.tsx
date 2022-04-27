/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../../utils/types';

import Select from '../../ui/Select/Select';

import classes from './Cart.module.scss';

interface ICartView {
	readonly user: User;
	readonly quantity: number | undefined;
	readonly isLoading: boolean;
	readonly cartTotal: number;
	readonly setQuantity: React.Dispatch<React.SetStateAction<number | undefined>>;
	readonly cartItemHandler: (quantity: number, id: string, size: string) => Promise<void>;
	readonly setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	readonly cartRemoveItem: (id: string) => Promise<void>;
}

const CartView: React.FC<ICartView> = ({ user, cartItemHandler, isLoading, cartRemoveItem, cartTotal }) => {
	let bodyContent;

	if (user.cart) {
		bodyContent = user.cart.map((product) => {
			return (
				<div key={product._id + product.size} className={classes.left__body__card}>
					<Link to={`/product-page?_id=${product._id}`} className={classes.left__body__card__img}>
						<img
							src={product.imageUrl}
							alt={product.name}
							className={classes.body__card__img__view}
						/>
					</Link>
					<div className={classes.left__body__card__text}>
						<h2 className={classes.left__body__card__text__view}>{product.name}</h2>
						<h2>Price: {product.price}$</h2>
						<h2>Size: {product.size}</h2>
						<div className={classes.left__body__card__text__quantitySelection}>
							<label htmlFor="quantity">quantity: </label>
							<Select
								_id={product._id}
								quantity={product.quantity}
								key={product._id}
								size={product.size}
								cartItemHandler={cartItemHandler}
							/>
						</div>
					</div>
					<div>
						<p
							className={classes.left__body__card__x}
							onClick={() => {
								cartRemoveItem(product._id);
							}}
						>
							X
						</p>
					</div>
				</div>
			);
		});
	} else {
		bodyContent = <p>no prods</p>;
	}

	return (
		<>
			<div className={classes.main}>
				<div className={classes.left}>
					<div className={classes.left__header}>
						<h1>Cart:</h1>
					</div>
					<div className={classes.left__body}>
						{bodyContent}
						{user.cart.length === 0 && <p>No poducts in bag</p>}
					</div>
				</div>
				<div className={classes.total}>
					<div className={classes.total__header}>
						<h1>Total:</h1>
						<h1>{cartTotal}$</h1>
					</div>
					<hr className={classes.total__hr} />
					<div className={classes.total__body}>
						<h2>Delivery: Free</h2>
						<h2>Tax: Free</h2>
					</div>
					<div className={classes.total__checkout}>
						<button className={classes.total__checkout__btn}>CHECKOUT</button>
					</div>
				</div>
			</div>
			{isLoading && (
				<>
					<div className={classes.modalBackground} />
					<div className={classes.loader} />;
				</>
			)}
		</>
	);
};

CartView.displayName = 'CartView';

export default CartView;
