/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import emptyHeart from '../../../assets/empty-heart.svg';
import fullHeart from '../../../assets/full-heart.svg';
import { Product } from '../ProductsPage/ProductsPage';
import { User } from '../Profile/Profile';
import classes from './ProductPage.module.scss';

interface ProductPageViewProps {
	readonly onClick?: () => void;
	product: Product | undefined;
	isFavorited: boolean;
	setIsFavorited: React.Dispatch<React.SetStateAction<boolean>>;
	addFavorite: (productId: string) => void;
	removeFavorite: (productId: string) => void;
	auth: {
		user: User;
		isAuth: boolean;
	};
}

const ProductPageView: React.FC<ProductPageViewProps> = ({
	product,
	isFavorited,
	addFavorite,
	removeFavorite,
	setIsFavorited,
	auth,
}) => {
	const [choosenSize, setChoosenSize] = useState();

	console.log(choosenSize);

	return (
		<div className={classes.productPage}>
			<div className={classes.productPage__img}>
				<img className={classes.productPage__img__view} src={product?.imageUrl} alt={product?.name} />
			</div>
			<div className={classes.productPage__content}>
				<h1 className={classes.productPage__header}>{product?.name}</h1>
				<h1 className={classes.productPage__price}>{product?.price} ILS</h1>
				<div className={classes.productPage__sizesSelection}>
					<h2 className={classes.productPage__sizesSelection__header}>Size:</h2>
					<form className={classes.productPage__sizesSelection__form}>
						{product?.sizes.map((size) => {
							return (
								<div className={classes.productPage__sizesSelection__div} key={size}>
									<input
										type="radio"
										name="size"
										id={size.toString()}
										className={classes.productPage__sizesSelection__btn}
										value={size}
										onClick={(event: React.MouseEvent<HTMLElement>) => {
											// eslint-disable-next-line @typescript-eslint/no-explicit-any
											setChoosenSize((event.target as any).value);
										}}
									/>
									<label
										className={classes.productPage__sizesSelection__label}
										htmlFor={size.toString()}
									>
										<div className={classes.productPage__sizesSelection__label__item}>
											{size}
										</div>
									</label>
								</div>
							);
						})}
					</form>
				</div>
				<div className={classes.productPage__clickers}>
					<button type="button" className={classes.productPage__clickers__cartBtn}>
						Add to cart
					</button>
					{auth.isAuth ? (
						isFavorited ? (
							<img
								className={classes.productPage__clickers__heart}
								src={fullHeart}
								alt="favorite"
								onClick={() => {
									removeFavorite(product!._id);
									setIsFavorited(!isFavorited);
								}}
							/>
						) : (
							<img
								className={classes.productPage__clickers__heart}
								src={emptyHeart}
								alt="favorite"
								onClick={() => {
									addFavorite(product!._id);
									setIsFavorited(!isFavorited);
								}}
							/>
						)
					) : (
						<p />
					)}
				</div>
			</div>
		</div>
	);
};

ProductPageView.displayName = 'ProductPageView';

export default ProductPageView;
