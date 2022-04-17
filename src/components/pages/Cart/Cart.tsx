import { useSelector } from 'react-redux';
import { ReducersState } from '../../../state/reducers';
import { User } from '../Profile/Profile';
import CartView from './Cart.view';

const Cart = () => {
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);

	const user = auth.user;

	return <CartView user={user} />;
};

Cart.displayName = 'Cart';

export default Cart;
