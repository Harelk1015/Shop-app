import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../../utils/types';

import ProductsPageView from './ProductsPage.view';

const ProductsPage: React.FC = () => {
	const params = new URLSearchParams(window.location.search);

	const [products, setProducts] = useState<Product[]>();
	const [userFavorites, setUserFavorites] = useState<{ _id: string; name: string; imageUrl: string }[]>();

	const sex = params.get('sex');
	const kind = params.get('kind');

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			axios
				.post(process.env.REACT_APP_BACKEND_URL + '/user/get-favorites')
				.then((res) => {
					setUserFavorites(res.data.userFavorites);
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
		}

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/products/get-products', {
				sex,
				kind,
			})
			.then((res) => {
				setProducts(res.data.products);
			})
			.catch((err) => {
				console.log(err.response.data.message);
			});
	}, []);

	let userFavoritesId: string[] | undefined = [];

	userFavoritesId = userFavorites?.map((favorite) => {
		return favorite._id;
	});

	return <ProductsPageView items={products} userFavoritesId={userFavoritesId} sex={sex} kind={kind} />;
};

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;
