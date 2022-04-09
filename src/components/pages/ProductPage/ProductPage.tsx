import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../ProductsPage/ProductsPage';
import ProductPageView from './ProductPage.view';

const ProductPage: React.FC = () => {
	const params = new URLSearchParams(window.location.search);
	const _id = params.get('_id');
	const [product, setProduct] = useState<Product>();

	useEffect(() => {
		axios
			.post('https://harel-shop-backend.herokuapp.com/products/get-product', {
				_id,
			})
			.then((res) => {
				console.log(res.data);
				setProduct(res.data.product);
			})
			.catch();
	}, []);

	return <ProductPageView product={product} />;
};

ProductPage.displayName = 'ProductPage';

export default ProductPage;
