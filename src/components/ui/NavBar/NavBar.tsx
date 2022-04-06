import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../state/reducers/actionCreator';
import { ReducersState } from '../../../state/reducers';
import { User } from '../../pages/Profile/Profile';
import NavBarView from './NavBar.view';

const NavBar = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const navigate = useNavigate();

	const dispacth = useDispatch();
	const { logout } = bindActionCreators(actionCreators, dispacth);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);

	const ToggleClass = () => {
		setIsActive(!isActive);
	};

	const onLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		logout();
		navigate('/');
	};

	return <NavBarView ToggleClass={ToggleClass} isActive={isActive} auth={auth} onLogout={onLogout} />;
};

NavBar.displayName = 'NavBar';

export default NavBar;
