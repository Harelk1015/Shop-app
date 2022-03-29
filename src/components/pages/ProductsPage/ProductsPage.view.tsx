import React from 'react';
import ProductItemView from '../../ui/Products/ProductItem.view';
import classes from './ProductsPage.module.scss';

interface ProductsViewProps {
	items: {
		_id: number;
		name: string;
		price: number;
		imageUrl: string;
		category: {
			sex: string;
			kind: string;
		};
		sizes: number[];
	}[];
	gender: string | null;
	category: string | null;
}

// eslint-disable-next-line react/destructuring-assignment
const ProductsPageView: React.FC<ProductsViewProps> = ({ items, gender, category }) => {
	// eslint-disable-next-line no-trailing-spaces

	return (
		<div className={classes.productsPage}>
			<header className={classes.productsPage__header}>
				<h1 className={classes.productsPage__header__text}>{gender}</h1>
				<h1 className={`${classes.productsPage__header__text} ${classes.category}`}>{category}</h1>
			</header>
			<main className={classes.productsPage__main}>
				{items.map((item) => {
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
