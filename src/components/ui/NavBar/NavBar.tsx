import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../state/reducers/actionCreator';
import { ReducersState } from '../../../state/reducers';
import { User } from '../../pages/Profile/Profile';
import { Product } from '../../pages/ProductsPage/ProductsPage';
import NavBarView from './NavBar.view';

const NavBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { setCartItem } = bindActionCreators(actionCreators, dispatch);
	const { logout } = bindActionCreators(actionCreators, dispatch);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const cart: { cartLength: number } = useSelector((state: ReducersState) => state.cart);

	const [isActive, setIsActive] = useState<boolean>(false);
	const [navSearchProducts, setNavSearchProducts] = useState<Product[]>([]);

	useEffect(() => {
		if (auth.user) {
			let cartLength = 0;

			auth.user.cart.forEach((item) => {
				cartLength += parseInt(item.quantity);
			});
			setCartItem(cartLength);
		}
	}, [auth.isAuth]);

	const onLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		logout();
		navigate('/');
	};

	const ToggleNavMenu = () => {
		setIsActive(!isActive);
	};

	const searchBarChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/products/nav-search', {
			searchInput: event.target.value,
		});

		setNavSearchProducts(res.data.products);

		if (event.target.value.length === 0) {
			setNavSearchProducts([]);
		}
	};

	return (
		<NavBarView
			ToggleNavMenu={ToggleNavMenu}
			isActive={isActive}
			auth={auth}
			cart={cart}
			searchBarChangeHandler={searchBarChangeHandler}
			setNavSearchProducts={setNavSearchProducts}
			navSearchProducts={navSearchProducts}
			onLogout={onLogout}
		/>
	);
};

NavBar.displayName = 'NavBar';

export default NavBar;
