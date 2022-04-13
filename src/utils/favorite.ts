import axios from 'axios';

export const addFavorite = (productId: string) => {
	axios
		.post('https://harel-shop-backend.herokuapp.com/user/add-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};

export const removeFavorite = (productId: string) => {
	axios
		.post('https://harel-shop-backend.herokuapp.com/user/remove-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};
