/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReducersState } from '../../../store/reducers';

import { favoriteHandler } from '../../../utils/favorite';

import { User } from '../../../utils/types';

import classes from '../../pages/ProductsPage/ProductsPage.module.scss';
import emptyHeart from '../../../assets/empty-heart.svg';
import fullHeart from '../../../assets/full-heart.svg';

interface ProductItemViewProps {
	readonly _id: string;
	readonly name: string;
	readonly price: number;
	readonly imageUrl: string;
	readonly isFavorited: boolean;
	readonly setIsFavorited: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductItemView: React.FunctionComponent<ProductItemViewProps> = ({
	_id,
	name,
	price,
	imageUrl,
	isFavorited,
	setIsFavorited,
}) => {
	const auth: { user: User; isAuth: boolean } = useSelector((state: ReducersState) => state.auth);
	const navigate = useNavigate();

	return (
		<div className={classes.productItem}>
			<div className={classes.productItem__img__push}>
				<img
					className={classes.productItem__img}
					src={imageUrl}
					alt={name}
					onClick={() => {
						navigate(`/product?_id=${_id}`);
						window.scrollTo(0, 0);
					}}
				/>
			</div>
			<div className={classes.productItem__details}>
				<div
					className={classes.productItem__details__text}
					onClick={() => {
						navigate(`/product?_id=${_id}`);
						window.scrollTo(0, 0);
					}}
				>
					<h3 className={classes.productItem__details__text__name}>{name}</h3>
					<h3 className={classes.productItem__details__text__price}>{`${price} ILS`}</h3>
				</div>
				{auth.isAuth ? (
					isFavorited ? (
						<img
							className={classes.productItem__heart}
							src={fullHeart}
							alt="favorite"
							onClick={() => {
								favoriteHandler(_id, 'remove');
								setIsFavorited(!isFavorited);
							}}
						/>
					) : (
						<img
							className={classes.productItem__heart}
							src={emptyHeart}
							alt="favorite"
							onClick={() => {
								favoriteHandler(_id);
								setIsFavorited(!isFavorited);
							}}
						/>
					)
				) : (
					<p />
				)}
			</div>
		</div>
	);
};

ProductItemView.displayName = 'ProductItemView';

export default ProductItemView;
