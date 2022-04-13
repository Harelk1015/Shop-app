import axios from 'axios';

export const addFavorite = (productId: string) => {
	axios
		.post('http://localhost:3030/user/add-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};

export const removeFavorite = (productId: string) => {
	axios
		.post('http://localhost:3030/user/remove-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};
