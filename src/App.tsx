import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { ReducersState } from './store/reducers';
import * as actionCreators from './store/reducers/actionCreator';

import { User } from './utils/types';

import Home from './components/pages/Home/Home';

import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/ui/Footer/Footer';
import NavBar from './components/ui/NavBar/NavBar';
import PageNotFound from './components/pages/404/PageNotFound';
import Contact from './components/pages/Contact/Contact';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Profile from './components/pages/Profile/Profile';
import AdminPanel from './components/pages/Admin/AdminPanel';
import Tickets from './components/pages/Tickets/Tickets';
import Cart from './components/pages/Cart/Cart';
import PageLoading from './components/ui/PageLoading/PageLoading';

// const Home = React.lazy(() => import('./components/pages/Home/Home'));
// const Login = React.lazy(() => import('./components/pages/Login/Login'));
// const Register = React.lazy(() => import('./components/pages/Register/Register'));
// const Footer = React.lazy(() => import('./components/ui/Footer/Footer'));
// const NavBar = React.lazy(() => import('./components/ui/NavBar/NavBar'));
// const PageNotFound = React.lazy(() => import('./components/pages/404/PageNotFound'));
// const Contact = React.lazy(() => import('./components/pages/Contact/Contact'));
// const ProductsPage = React.lazy(() => import('./components/pages/ProductsPage/ProductsPage'));
// const ProductPage = React.lazy(() => import('./components/pages/ProductPage/ProductPage'));
// const Profile = React.lazy(() => import('./components/pages/Profile/Profile'));
// const AdminPanel = React.lazy(() => import('./components/pages/Admin/AdminPanel'));
// const Tickets = React.lazy(() => import('./components/pages/Tickets/Tickets'));
// const Cart = React.lazy(() => import('./components/pages/Cart/Cart'));
// const PageLoading = React.lazy(() => import('./components/ui/PageLoading/PageLoading'));

import './App.scss';

const App = () => {
	const dispacth = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const { login } = bindActionCreators(actionCreators, dispacth);

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			setIsLoading(true);

			axios
				.get(process.env.REACT_APP_BACKEND_URL + '/auth/auto-login')
				.then((res) => {
					login(res.data.user);
				})
				.catch((err) => {
					console.log(err.response.data.message);
				})
				.finally(() => setIsLoading(false));
		}
	}, []);

	axios.interceptors.request.use(
		(config) => {
			if (config.headers) {
				config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
				config.headers.AuthorizationRefresh = `Bearer ${localStorage.getItem('refreshToken')}`;

				return config;
			}
		},
		(error) => {
			return Promise.reject(error);
		},
	);

	if (isLoading) {
		return <PageLoading />;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				{/* Routes for all users */}
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/product" element={<ProductPage />} />

				{/* Routes for unauthenticated users */}
				{!auth.isAuth && (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/*" element={<Login />} />
					</>
				)}

				{/* Routes for Authenticated users */}
				{auth.isAuth && (
					<>
						<Route path="/contact" element={<Contact />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/cart" element={<Cart />} />
					</>
				)}

				{/* Routes for Admins */}
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
