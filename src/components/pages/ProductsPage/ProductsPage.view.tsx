import React from 'react';
import { Link } from 'react-router-dom';
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
				<Link className={classes.productsPage__header__text} to={`/products?sex=${sex}`}>
					{sex}
				</Link>
				<Link
					className={`${classes.productsPage__header__text} ${classes.kind}`}
					to={`/products?kind=${kind}`}
				>
					{kind}
				</Link>
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
