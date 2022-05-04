import { combineReducers } from 'redux';
import { authReducer, cartReducer } from './authReducer';

const reducers = combineReducers({
	auth: authReducer,
	cart: cartReducer,
});

export default reducers;

export type ReducersState = ReturnType<typeof reducers>;
