import React from 'react';
import { Product } from '../../../utils/types';

import ProductItem from '../../ui/Products/ProductItem';

import classes from './ProductsPage.module.scss';

interface ProductsViewProps {
	readonly items: Product[] | undefined;
	readonly sex: string | null;
	readonly kind: string | null;
	readonly userFavoritesId: string[] | undefined;
}

const ProductsPageView: React.FC<ProductsViewProps> = ({ items, sex, kind, userFavoritesId }) => {
	return (
		<div className={classes.productsPage}>
			<header className={classes.productsPage__header}>
				<h1 className={classes.productsPage__header__text}>{sex}</h1>
				<h1 className={`${classes.productsPage__header__text} ${classes.kind}`}>{kind}</h1>
			</header>
			<main className={classes.productsPage__main}>
				{items?.map((item) => {
					return (
						<ProductItem
							key={item._id}
							_id={item._id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
							userFavoritesId={userFavoritesId}
						/>
					);
				})}
			</main>
		</div>
	);
};

ProductsPageView.displayName = 'ProductsPageView';

export default ProductsPageView;
