/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import classes from './AddedToCartModal.module.scss';

interface IAddedToCartModal {
	name: string;
	size: number;
	price: number;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddedToCartModal: React.FC<IAddedToCartModal> = ({ name, size, price, setOpenModal }) => {
	// const navigate = useNavigate();

	return (
		<>
			<div
				className={classes.modalBackground}
				onClick={() => {
					setOpenModal(false);
				}}
			/>
			<div className={classes.main}>
				<div className={classes.header}>
					<h3 className={classes.header__text}>You added an item to your cart!</h3>
				</div>
				<div className={classes.body}>
					<h4 className={classes.body__text}>Item: {name}</h4>
					<h4 className={classes.body__text}>Size: {size}</h4>
					<h4 className={classes.body__text}>Price: {price}</h4>
				</div>
				<div className={classes.footer}>
					<button
						className={classes.footer__btn}
						onClick={() => {
							setOpenModal(false);
						}}
					>
						Continue Shopping
					</button>
					<button
						className={classes.footer__btn}
						onClick={() => {
							window.location.replace('/cart');
						}}
					>
						Go to cart
					</button>
				</div>
			</div>
		</>
	);
};

AddedToCartModal.displayName = 'AddedToCartModal';

export default AddedToCartModal;
