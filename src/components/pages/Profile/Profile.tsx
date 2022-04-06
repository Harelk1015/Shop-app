/* eslint-disable import/no-cycle */
/* eslint-disable import/exports-last */
// eslint-disable-next-line import/no-cycle
import { useSelector } from 'react-redux';
import { ReducersState } from '../../../state/reducers';
import ProfileView from './Profile.view';

// User

export interface User {
	readonly username: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
	favorites: number[];
	tokens: { token: string; _id: string }[];
	_id: number;
}

// Tickets

// eslint-disable-next-line import/exports-last
export interface Ticket {
	_id: number;
	ownerId: number;
	subject: string;
	email: string;
	message: string;
}

export type Tickets = Ticket[];

// Orders

interface Order {
	_id: number;
	ownerId: number;
	productsId: number[];
	total: number;
}

export type Orders = Order[];

const ticket1: Ticket = {
	_id: 1,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 1',
};

const ticket2: Ticket = {
	_id: 2,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 2',
};

const ticket3: Ticket = {
	_id: 3,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 2',
};

const ticket4: Ticket = {
	_id: 4,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 2',
};

const ticket5: Ticket = {
	_id: 5,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 2',
};

const ticket6: Ticket = {
	_id: 6,
	email: 'harelk1015@gmail.com',
	message: 'ticket from user id 1',
	ownerId: 1,
	subject: 'ticket number 2',
};

const ticket7: Ticket = {
	_id: 7,
	email: 'asd@gmail.com',
	ownerId: 2,
	subject: 'Noder Neder',
	message:
		'אמא של יוני ממש זונה ויש לה תור ארוך לשירותי מין שלה , אני כבר מקום 30 בקיו ואני מקווה שיום אחד אמא שלו תקבל אותי ואני אשאיר לה טיפ מכובד',
};

export const tickets: Tickets = [ticket1, ticket2, ticket3, ticket4, ticket5, ticket6, ticket7];

const Profile = () => {
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);

	const user = auth.user;

	const orders: Orders = [
		{ _id: 1, ownerId: 1, productsId: [1, 2], total: 150 },
		{ _id: 2, ownerId: 1, productsId: [3, 4], total: 200 },
	];

	return <ProfileView user={user} orders={orders} />;
};

Profile.displayName = 'Profile';

export default Profile;
