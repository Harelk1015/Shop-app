/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import emptyHeart from '../../../assets/empty-heart.svg';
import fullHeart from '../../../assets/full-heart.svg';
import AddedToCart from '../../ui/AddedToCartModal/AddedToCartModal';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
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
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	addToCartHandler: () => Promise<void>;
	choosenSize: number;
	setChoosenSize: React.Dispatch<React.SetStateAction<number>>;
	choosedId: string;
	setChoosenId: React.Dispatch<React.SetStateAction<string>>;
}

const ProductPageView: React.FC<ProductPageViewProps> = ({
	product,
	isFavorited,
	addFavorite,
	removeFavorite,
	setIsFavorited,
	auth,
	openModal,
	setOpenModal,
	addToCartHandler,
	setChoosenId,
	setChoosenSize,
	choosenSize,
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
									<div className={classes.productPage__sizesSelection__div} key={size._id}>
										<input
											type="radio"
											name="size"
											id={size.size.toString()}
											className={classes.productPage__sizesSelection__btn}
											value={size.size}
											onClick={(event: React.MouseEvent<HTMLElement>) => {
												setChoosenSize((event.target as any).value);
												setChoosenId(size._id);
											}}
										/>
										<label
											className={classes.productPage__sizesSelection__label}
											htmlFor={size.size.toString()}
										>
											<div
												className={`${
													classes.productPage__sizesSelection__label__item
												} ${
													choosenSize === size.size
														? classes.productPage__sizesSelection__label__item__active
														: ''
												}`}
											>
												{size.size}
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
								!choosenSize && classes.productPage__clickers__cartBtn__disabled
							}`}
							disabled={!choosenSize}
							onClick={() => {
								addToCartHandler();
							}}
						>
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
