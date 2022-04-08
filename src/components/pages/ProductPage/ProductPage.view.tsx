import React, { useState } from 'react';
import emptyHeart from '../../../assets/empty-heart.svg';
import { Product } from '../ProductsPage/ProductsPage';
import classes from './ProductPage.module.scss';

interface ProductPageViewProps {
	readonly onClick?: () => void;
	product: Product | undefined;
}

const ProductPageView: React.FC<ProductPageViewProps> = ({ product }) => {
	const [choosenSize, setChoosenSize] = useState();

	console.log(choosenSize);

	// should fetch all the product props from server insted of the find method above

	return (
		<div className={classes.productPage}>
			<img className={classes.productPage__img} src={product?.imageUrl} alt={product?.name} />
			<div className={classes.productPage__content}>
				<h1 className={classes.productPage__header}>{product?.name}</h1>
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
					<img
						className={classes.productPage__clickers__heart}
						src={emptyHeart}
						alt="favorite"
						onClick={() => {
							// will chnage the svg to black and send request
						}}
					/>
				</div>
			</div>
		</div>
	);
};

ProductPageView.displayName = 'ProductPageView';

export default ProductPageView;
