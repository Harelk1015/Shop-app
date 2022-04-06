import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ReducersState } from './state/reducers';
import * as actionCreators from './state/reducers/actionCreator';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/ui/Footer/Footer';
import NavBar from './components/ui/NavBar/NavBar';
import PageNotFound from './components/pages/404/PageNotFound';
import Contact from './components/pages/Contact/Contact';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Profile, { User } from './components/pages/Profile/Profile';
import AdminPanel from './components/pages/Admin/AdminPanel';
import Tickets from './components/pages/Tickets/Tickets';

const App = () => {
	const dispacth = useDispatch();

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const { login } = bindActionCreators(actionCreators, dispacth);

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			axios.get('http://localhost:3030/auth/autologin').then((res) => {
				login(res.data.user);
			});
		}
	}, []);

	axios.interceptors.request.use(
		(config) => {
			if (config.headers) {
				config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
				config.headers.AuthorizationRefresh = `Bearer ${localStorage.getItem('refreshToken')}`;
				config.headers.User = `userId ${localStorage.getItem('refreshToken')}`;

				return config;
			}
		},
		(error) => {
			return Promise.reject(error);
		},
	);

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products-page" element={<ProductsPage />} />
				<Route path="/product-page" element={<ProductPage />} />

				{!auth.isAuth ? (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</>
				) : (
					<Route path="/" element={<Home />} />
				)}

				{auth.isAuth && (
					<>
						<Route path="/contact" element={<Contact />} />
						<Route path="/profile" element={<Profile />} />
					</>
				)}

				{auth.user?.role === 'admin' && (
					<>
						<Route path="/admin-panel" element={<AdminPanel />} />
						<Route path="/ticket-page" element={<Tickets />} />
					</>
				)}

				<Route path="/*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

App.displayName = 'App';

export default App;
