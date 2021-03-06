/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSearchParams } from 'react-router-dom';
import { ReducersState } from '../../../store/reducers';
import * as actionCreators from '../../../store/reducers/actionCreator';

import { IFavorite, Product, User } from '../../../utils/types';

import { favoriteHandler } from '../../../utils/favorite';

import ProductPageView from './ProductPage.view';

const ProductPage: React.FC = () => {
	const dispatch = useDispatch();
	const params = new URLSearchParams(window.location.search);
	const _id = params.get('_id');

	const [isFavorited, setIsFavorited] = useState(false);
	const [product, setProduct] = useState<Product>();
	const [openModal, setOpenModal] = useState(false);
	const [choosenSize, setChoosenSize] = useState<number>(0);
	const [choosenId, setChoosenId] = useState<string>('');

	const { addCartItem } = bindActionCreators(actionCreators, dispatch);
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);

	const [searchParams] = useSearchParams();

	useEffect(() => {
		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/products/get-product', {
				_id,
			})
			.then((res) => {
				setProduct(res.data.product);
			})
			.catch();

		if (localStorage.getItem('accessToken')) {
			axios
				.post(process.env.REACT_APP_BACKEND_URL + '/user/get-favorites')
				.then((res) => {
					res.data.userFavorites.forEach((favorite: IFavorite) => {
						if (!isFavorited) {
							if (_id === favorite._id) {
								setIsFavorited(true);
							}
						}
					});
				})
				.catch((err) => console.log(err.response.data.message));
		}
	}, [searchParams]);

	const addToCartHandler = async () => {
		if (!product) {
			return;
		}

		try {
			const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/cart', {
				_id: _id,
				name: product.name,
				price: +product.price,
				size: choosenSize,
				quantity: 1,
				imageUrl: product.imageUrl,
			});

			console.log(res.data);
			addCartItem();
			setOpenModal(true);
		} catch (err: any) {
			console.log(err.response.data.message);

			return;
		}
	};

	return (
		<ProductPageView
			product={product}
			isFavorited={isFavorited}
			setIsFavorited={setIsFavorited}
			favoriteHandler={favoriteHandler}
			auth={auth}
			openModal={openModal}
			setOpenModal={setOpenModal}
			addToCartHandler={addToCartHandler}
			choosenSize={choosenSize}
			setChoosenSize={setChoosenSize}
			choosedId={choosenId}
			setChoosenId={setChoosenId}
		/>
	);
};

ProductPage.displayName = 'ProductPage';

export default ProductPage;
