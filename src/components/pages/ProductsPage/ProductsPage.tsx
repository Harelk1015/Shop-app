/* eslint-disable import/exports-last */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ProductsPageView from './ProductsPage.view';

export interface Product {
	_id: number;
	name: string;
	price: number;
	imageUrl: string;
	kind: {
		sex: string;
		kind: 'Pants' | 'Shoes' | 'Shirts';
	};
	sizes: number[];
}

export type Products = Product[] | [];

export const DUMMY_PRODUCTS: Products = [
	{
		_id: 1,
		name: 'blue Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 2,
		name: 'black Pants',
		price: 29.99,
		imageUrl: 'https://litb-cgis.rightinthebox.com/images/x/202008/iqhm1597303836855.jpg',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 3,
		name: 'purple Pants',
		price: 29.99,
		imageUrl: 'https://litb-cgis.rightinthebox.com/images/x/202011/atmmpd1604983076568.jpg',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 4,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://www.delta.co.il/pub/media/catalog/product/cache/68cb7419c5fbe5ff1cd1d2abdd94fb1c/l/d/LDK1921_LM06A_2-1626887989454690.jpg',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 5,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 6,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 7,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 8,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
	{
		_id: 9,
		name: 'purple Pants',
		price: 29.99,
		imageUrl:
			'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
		kind: {
			sex: 'man',
			kind: 'Pants',
		},
		sizes: [41, 42, 43],
	},
];

const ProductsPage: React.FC = () => {
	const params = new URLSearchParams(window.location.search);
	const sex = params.get('sex');
	const kind = params.get('kind');

	console.log(sex, kind);

	const [products, setProducts] = useState<Product[]>();

	useEffect(() => {
		axios
			.post('https://harel-shop-backend.herokuapp.com/products/get-products', {
				sex,
				kind,
			})
			.then((res) => {
				setProducts(res.data.products);
			})
			.catch((err) => console.log(err));
	}, []);

	return <ProductsPageView items={products} sex={sex} kind={kind} />;
};

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;
