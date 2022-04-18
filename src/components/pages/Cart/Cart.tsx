import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ReducersState } from '../../../state/reducers';
import { User } from '../Profile/Profile';
import CartView from './Cart.view';

const Cart = () => {
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const [quantity, setQuantity] = useState<number>();

	const cartItemHandler = (quantity: number, id: string) => {
		console.log(quantity, id);
		setQuantity(quantity);
	};

	return (
		<CartView
			user={auth.user}
			quantity={quantity}
			setQuantity={setQuantity}
			cartItemHandler={cartItemHandler}
		/>
	);
};

Cart.displayName = 'Cart';

export default Cart;
