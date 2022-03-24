import React from 'react';
import ProductItemView from './ProductItemView';
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
      sizes: number[];
    };
  }[];
  gender: string | null;
  category: string | null;
}

const ProductsPageView: React.FC<ProductsViewProps> = ({ items, gender, category }) => {
  console.log(items);
  return (
    <div className={classes.productsPage}>
      <header className={classes.productsPage__header}>
        <h1 className={classes.productsPage__header__text}>{gender}</h1>
        <h1 className={classes.productsPage__header__text}>{category}</h1>
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
            />
          );
        })}
      </main>
    </div>
  );
};

export default ProductsPageView;
