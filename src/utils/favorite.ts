import axios from 'axios';

export const addFavorite = (productId: string) => {
	axios
		.post(process.env.BACKEND_URL + '/user/add-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};

export const removeFavorite = (productId: string) => {
	axios
		.post(process.env.BACKEND_URL + '/user/remove-favorite', {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};
