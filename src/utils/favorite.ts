import axios from 'axios';

export type IFavoritePaths = '/user/add-favorite' | '/user/remove-favorite';

export type IFavoriteOperations = 'add' | 'remove';

export const favoriteHandler = (productId: string, operation?: IFavoriteOperations) => {
	const path: IFavoritePaths = operation === 'remove' ? '/user/remove-favorite' : '/user/add-favorite';

	axios
		.post(process.env.REACT_APP_BACKEND_URL + path, {
			productId,
		})
		.then((res) => console.log(res))
		.catch((err) => console.log(err.response.data));
};

// export const addFavorite = (productId: string) => {
// 	axios
// 		.post(process.env.REACT_APP_BACKEND_URL + '/user/add-favorite', {
// 			productId,
// 		})
// 		.then((res) => console.log(res))
// 		.catch((err) => console.log(err.response.data));
// };

// export const removeFavorite = (productId: string) => {
// 	axios
// 		.post(process.env.REACT_APP_BACKEND_URL + '/user/remove-favorite', {
// 			productId,
// 		})
// 		.then((res) => console.log(res))
// 		.catch((err) => console.log(err.response.data));
// };
