/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-self-assign */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

import { User } from '../../../utils/types';
import { ReducersState } from '../../../store/reducers';

import CartView from './Cart.view';

const Cart = () => {
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const [quantity, setQuantity] = useState<number>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cartTotal, setCartTotal] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		auth.user.cart.map((item) => {
			const itemTotalPrice = parseInt(item.quantity) * parseInt(item.price);

			setCartTotal((prev) => {
				return prev + itemTotalPrice;
			});
		});
	}, []);

	const cartItemHandler = async (quantity: number, id: string, size: string) => {
		setIsLoading(true);
		console.log(quantity, id, size);

		try {
			const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/cart/set-cart', {
				prodId: id,
				size,
				quantity,
			});

			setIsLoading(false);
			console.log(res);
			window.location.reload();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.log(err.response);
			setIsLoading(false);
		}
	};

	const cartRemoveItem = async (id: string, size: string) => {
		setIsLoading(true);

		try {
			await axios.post(process.env.REACT_APP_BACKEND_URL + '/cart/remove-cart-item', {
				_id: id,
				size,
			});

			setIsLoading(false);
			window.location.reload();
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	const addToCartHandler = () => {
		setOpenModal(true);
	};

	return (
		<CartView
			user={auth.user}
			quantity={quantity}
			setQuantity={setQuantity}
			cartItemHandler={cartItemHandler}
			isLoading={isLoading}
			setIsLoading={setIsLoading}
			cartRemoveItem={cartRemoveItem}
			cartTotal={cartTotal}
			addToCartHandler={addToCartHandler}
			setOpenModal={setOpenModal}
			openModal={openModal}
		/>
	);
};

Cart.displayName = 'Cart';

export default Cart;
