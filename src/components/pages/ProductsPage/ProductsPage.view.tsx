import React from 'react';
import ProductItemView from '../../ui/Products/ProductItem.view';
import type { Product } from './ProductsPage';

import classes from './ProductsPage.module.scss';

interface ProductsViewProps {
	items: Product[] | undefined;
	sex: string | null;
	kind: string | null;
}

// eslint-disable-next-line react/destructuring-assignment
const ProductsPageView: React.FC<ProductsViewProps> = ({ items, sex, kind }) => {
	// eslint-disable-next-line no-trailing-spaces

	items?.map((item) => {
		return (
			<ProductItemView
				key={item._id}
				_id={item._id}
				name={item.name}
				price={item.price}
				imageUrl={item.imageUrl}
				sizes={item.sizes}
			/>
		);
	});

	return (
		<div className={classes.productsPage}>
			<header className={classes.productsPage__header}>
				<h1 className={classes.productsPage__header__text}>{sex}</h1>
				<h1 className={`${classes.productsPage__header__text} ${classes.kind}`}>{kind}</h1>
			</header>
			<main className={classes.productsPage__main}>
				{items?.map((item) => {
					return (
						<ProductItemView
							key={item._id}
							_id={item._id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
							sizes={item.sizes}
						/>
					);
				})}
			</main>
		</div>
	);
};

ProductsPageView.displayName = 'ProductsPageView';

export default ProductsPageView;
