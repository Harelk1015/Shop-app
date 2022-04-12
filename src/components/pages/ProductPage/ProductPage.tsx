import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ReducersState } from '../../../state/reducers';

import { Product } from '../ProductsPage/ProductsPage';
import { addFavorite, removeFavorite } from '../../../utils/favorite';
import { User } from '../Profile/Profile';
import ProductPageView from './ProductPage.view';

interface IFavorite {
	_id: string;
	imageUrl: string;
	name: string;
}

const ProductPage: React.FC = () => {
	const params = new URLSearchParams(window.location.search);

	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const [isFavorited, setIsFavorited] = useState(false);
	const _id = params.get('_id');
	const [product, setProduct] = useState<Product>();

	useEffect(() => {
		axios
			.post('https://harel-shop-backend.herokuapp.com/products/get-product', {
				_id,
			})
			.then((res) => {
				// console.log(res.data);
				setProduct(res.data.product);
			})
			.catch();

		if (localStorage.getItem('accessToken')) {
			axios
				.post('https://harel-shop-backend.herokuapp.com/user/get-favorites')
				.then((res) => {
					res.data.userFavorites.forEach((favorite: IFavorite) => {
						if (!isFavorited) {
							setIsFavorited(_id === favorite._id);
						}
					});
				})
				.catch((err) => console.log(err.response.data.message));
		}
	}, []);

	return (
		<ProductPageView
			product={product}
			isFavorited={isFavorited}
			setIsFavorited={setIsFavorited}
			addFavorite={addFavorite}
			removeFavorite={removeFavorite}
			auth={auth}
		/>
	);
};

ProductPage.displayName = 'ProductPage';

export default ProductPage;
