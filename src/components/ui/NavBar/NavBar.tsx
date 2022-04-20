import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../state/reducers/actionCreator';
import { ReducersState } from '../../../state/reducers';
import { User } from '../../pages/Profile/Profile';
import NavBarView from './NavBar.view';

const NavBar = () => {
	const dispatch = useDispatch();
	const { setCartItem } = bindActionCreators(actionCreators, dispatch);
	const [isActive, setIsActive] = useState<boolean>(false);
	const navigate = useNavigate();

	const dispacth = useDispatch();
	const { logout } = bindActionCreators(actionCreators, dispacth);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const cart: { cartLength: number } = useSelector((state: ReducersState) => state.cart);

	const ToggleClass = () => {
		setIsActive(!isActive);
	};

	const onLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		logout();
		navigate('/');
	};

	useEffect(() => {
		if (auth.user) {
			let cartLength = 0;

			auth.user.cart.forEach((item) => {
				cartLength += parseInt(item.quantity);
			});
			setCartItem(cartLength);
		}
	}, [auth.isAuth]);

	return (
		<NavBarView
			ToggleClass={ToggleClass}
			isActive={isActive}
			auth={auth}
			cart={cart}
			onLogout={onLogout}
		/>
	);
};

NavBar.displayName = 'NavBar';

export default NavBar;
