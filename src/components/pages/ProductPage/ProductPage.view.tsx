/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Product, User } from '../../../utils/types';

import { IFavoriteOperations } from '../../../utils/favorite';
import AddedToCart from '../../ui/AddedToCartModal/AddedToCartModal';
import emptyHeart from '../../../assets/empty-heart.svg';
import fullHeart from '../../../assets/full-heart.svg';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';

import classes from './ProductPage.module.scss';

interface ProductPageViewProps {
	readonly product: Product | undefined;
	readonly isFavorited: boolean;
	readonly openModal: boolean;
	readonly choosenSize: number;
	readonly choosedId: string;
	readonly auth: {
		readonly user: User;
		readonly isAuth: boolean;
	};
	readonly onClick?: () => void;
	readonly setIsFavorited: React.Dispatch<React.SetStateAction<boolean>>;
	readonly favoriteHandler: (productId: string, operation?: IFavoriteOperations | undefined) => void;
	readonly setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	readonly addToCartHandler: () => Promise<void>;
	readonly setChoosenSize: React.Dispatch<React.SetStateAction<number>>;
	readonly setChoosenId: React.Dispatch<React.SetStateAction<string>>;
}

const ProductPageView: React.FC<ProductPageViewProps> = ({
	product,
	isFavorited,
	auth,
	openModal,
	choosenSize,
	favoriteHandler,
	setIsFavorited,
	setOpenModal,
	addToCartHandler,
	setChoosenId,
	setChoosenSize,
}) => {
	if (!product) {
		return (
			<>
				<br />;
				<LoadingSpinner />;
			</>
		);
	}

	return (
		<>
			<div className={classes.productPage}>
				<div className={classes.productPage__img}>
					<img
						className={classes.productPage__img__view}
						src={product.imageUrl}
						alt={product.name}
					/>
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
												setChoosenSize((event.target as any).value);
												setChoosenId(product._id);
											}}
										/>
										<label
											className={classes.productPage__sizesSelection__label}
											htmlFor={size.toString()}
										>
											<div
												className={`${
													classes.productPage__sizesSelection__label__item
												} ${
													choosenSize.toString() === size
														? classes.productPage__sizesSelection__label__item__active
														: ''
												}`}
											>
												{size}
											</div>
										</label>
									</div>
								);
							})}
						</form>
					</div>
					<div className={classes.productPage__clickers}>
						<button
							type="button"
							className={`${classes.productPage__clickers__cartBtn} ${
								(!choosenSize || !auth.isAuth) &&
								classes.productPage__clickers__cartBtn__disabled
							}`}
							disabled={!choosenSize}
							onClick={() => {
								addToCartHandler();
							}}
						>
							Add to cart
						</button>

						{!auth.isAuth && (
							<h3 className={classes.productPage__clickers__text}>
								You must Login inorder to add items to your cart
							</h3>
						)}
						{auth.isAuth ? (
							isFavorited ? (
								<img
									className={classes.productPage__clickers__heart}
									src={fullHeart}
									alt="favorite"
									onClick={() => {
										favoriteHandler(product!._id, 'remove');
										setIsFavorited(!isFavorited);
									}}
								/>
							) : (
								<img
									className={classes.productPage__clickers__heart}
									src={emptyHeart}
									alt="favorite"
									onClick={() => {
										favoriteHandler(product!._id);
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
			{openModal && (
				<AddedToCart
					name={product.name}
					price={product.price}
					size={choosenSize}
					setOpenModal={setOpenModal}
				/>
			)}
		</>
	);
};

ProductPageView.displayName = 'ProductPageView';

export default ProductPageView;
