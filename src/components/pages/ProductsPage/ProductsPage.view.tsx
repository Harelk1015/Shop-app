import React from 'react';
import ProductItem from '../../ui/Products/ProductItem';
import type { Product } from './ProductsPage';

import classes from './ProductsPage.module.scss';

interface ProductsViewProps {
	items: Product[] | undefined;
	sex: string | null;
	kind: string | null;
	userFavoritesId: string[] | undefined;
}

// eslint-disable-next-line react/destructuring-assignment
const ProductsPageView: React.FC<ProductsViewProps> = ({ items, sex, kind, userFavoritesId }) => {
	// eslint-disable-next-line no-trailing-spaces

	console.log(items);

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
