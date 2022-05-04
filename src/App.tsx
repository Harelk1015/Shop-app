import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { ReducersState } from './store/reducers';
import * as actionCreators from './store/reducers/actionCreator';

import { User } from './utils/types';
import AppView from './app.view';

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

	return <AppView isLoading={isLoading} auth={auth} />;
};

App.displayName = 'App';

export default App;
