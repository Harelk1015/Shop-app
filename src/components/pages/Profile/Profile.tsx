// eslint-disable-next-line import/no-cycle
import ProfileView from './Profile.view';

// User


interface User {
	_id: number;
	username: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
	favoritesId: number[];
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

// eslint-disable-next-line import/exports-last
export type Tickets = Ticket[];

// Orders


// eslint-disable-next-line import/exports-last
interface Order {
	_id: number;
	ownerId: number;
	productsId: number[];
	total: number;
}

// eslint-disable-next-line import/exports-last
export type Orders = Order[];

const Profile = () => {
	const user: User = {
		_id: 1,
		username: 'harelk1015',
		email: 'harelk1015@gmail.com',
		password: '123123',
		role: 'user',
		favoritesId: [1, 2, 3],
	};

	// const ticket1: Ticket = {
	// 	_id: 1,
	// 	email: 'harelk1015@gmail.com',
	// 	message: 'ticket from user id 1',
	// 	ownerId: 1,
	// 	subject: 'ticket number 1',
	// };

	// const ticket2: Ticket = {
	// 	_id: 2,
	// 	email: 'harelk1015@gmail.com',
	// 	message: 'ticket from user id 1',
	// 	ownerId: 1,
	// 	subject: 'ticket number 2',
	// };

	// const tickets: Tickets = [ticket1, ticket2];

	const orders: Orders = [
		{ _id: 1, ownerId: 1, productsId: [1, 2], total: 150 },
		{ _id: 2, ownerId: 1, productsId: [3, 4], total: 200 },
	];

	return <ProfileView user={user} orders={orders} />;
};

Profile.displayName = 'Profile';

export default Profile;
