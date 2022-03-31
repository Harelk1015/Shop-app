/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../../pages/ProductsPage/ProductsPage.module.scss';
import emptyHeart from '../../../assets/empty-heart.svg';

interface ProductItemViewProps {
	_id: number;
	name: string;
	price: number;
	imageUrl: string;
	sizes: number[];
}

const ProductItemView: React.FunctionComponent<ProductItemViewProps> = ({ _id, name, price, imageUrl }) => {
	const navigate = useNavigate();

	return (
		<div className={classes.productItem}>
			<img
				className={classes.productItem__img}
				src={imageUrl}
				alt={name}
				onClick={() => {
					navigate(`/product-page?_id=${_id}`);
					window.scrollTo(0, 0);
				}}
			/>
			<div className={classes.productItem__details}>
				<div
					className={classes.productItem__details__text}
					onClick={() => {
						navigate(`/product-page?_id=${_id}`);
						window.scrollTo(0, 0);
					}}
				>
					<h3 className={classes.productItem__details__text__name}>{name}</h3>
					<h3 className={classes.productItem__details__text__price}>
						{price}
						ILS
					</h3>
				</div>
				<img
					className={classes.productItem__heart}
					src={emptyHeart}
					alt="favorite"
					onClick={() => {
						// will chnage the svg to black and send request
					}}
				/>
			</div>
		</div>
	);
};

ProductItemView.displayName = 'ProductItemView';

export default ProductItemView;
