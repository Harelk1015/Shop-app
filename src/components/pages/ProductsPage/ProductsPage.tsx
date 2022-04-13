/* eslint-disable import/exports-last */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductsPageView from './ProductsPage.view';

export interface Product {
	_id: string;
	name: string;
	price: number;
	imageUrl: string;
	kind: {
		sex: string;
		kind: 'Pants' | 'Shoes' | 'Shirts';
	};
	sizes: number[];
	isFavorited?: boolean;
}

export type Products = Product[] | [];

const ProductsPage: React.FC = () => {
	const params = new URLSearchParams(window.location.search);
	const [products, setProducts] = useState<Product[]>();
	const [userFavorites, setUserFavorites] = useState<{ _id: string; name: string; imageUrl: string }[]>();

	const sex = params.get('sex');
	const kind = params.get('kind');

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			axios
				.post('https://harel-shop-backend.herokuapp.com/user/get-favorites')
				.then((res) => {
					setUserFavorites(res.data.userFavorites);
				})
				.catch((err) => {
					console.log(err.response.data.message);
				});
		}

		axios
			.post('https://harel-shop-backend.herokuapp.com/products/get-products', {
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let userFavoritesId: string[] | undefined = [];

	userFavoritesId = userFavorites?.map((favorite) => {
		return favorite._id;
	});

	return <ProductsPageView items={products} userFavoritesId={userFavoritesId} sex={sex} kind={kind} />;
};

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;
