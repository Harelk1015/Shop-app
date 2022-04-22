export interface IReactEvent {
	target: {
		value: string;
	};
}

export interface Product {
	_id: string;
	name: string;
	price: number;
	imageUrl: string;
	kind: {
		sex: string;
		kind: 'Pants' | 'Shoes' | 'Shirts';
	};
	sizes: { size: number; _id: string }[];
	isFavorited?: boolean;
}

export interface IFavorite {
	_id: string;
	imageUrl: string;
	name: string;
}

export interface User {
	readonly username: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
	favorites: number[];
	tokens: { token: string; _id: string }[];
	_id: number;
	parentId: number;
	cart: {
		parentId: string;
		_id: string;
		name: string;
		price: string;
		size: string;
		quantity: string;
		imageUrl: string;
	}[];
}

export interface Ticket {
	_id: number;
	ownerId: string;
	subject: string;
	email: string;
	message: string;
}

export interface Order {
	_id: number;
	ownerId: number;
	productsId: number[];
	total: number;
}
