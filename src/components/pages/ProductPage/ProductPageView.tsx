import React, { useState } from 'react';
import classes from './ProductPage.module.scss';
import emptyHeart from '../ProductsPage/empty-heart.svg';

import { DUMMY_PRODUCTS } from '../ProductsPage/ProductsPage';

const ProductPageView: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const _id = params.get('_id');
  const [choosenSize, setChoosenSize] = useState();

  let product = DUMMY_PRODUCTS.find((product) => {
    return product._id.toString() == _id;
  });

  // should fetch all the product props from server insted of the find method above

  return (
    <div className={classes.productPage}>
      <img
        className={classes.productPage__img}
        src={product?.imageUrl}
        alt={product?.name}
      />

      <div className={classes.productPage__content}>
        <h1 className={classes.productPage__header}>{product?.name}</h1>
        <div className={classes.productPage__sizesSelection}>
          <h2 className={classes.productPage__sizesSelection__header}>Size:</h2>
          <form className={classes.productPage__sizesSelection__form}>
            {product?.sizes.map((size) => {
              return (
                <div
                  className={classes.productPage__sizesSelection__div}
                  key={size}
                >
                  <input
                    type="radio"
                    name="size"
                    id={product?._id.toString()}
                    className={classes.productPage__sizesSelection__btn}
                    value={size}
                    onChange={(event: any) => {
                      setChoosenSize(event.target.value);
                    }}
                  />
                  <label
                    className={classes.productPage__sizesSelection__label}
                    htmlFor={product?._id.toString()}
                  >
                    <div
                      className={
                        classes.productPage__sizesSelection__label__item
                      }
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
          <button className={classes.productPage__clickers__cartBtn}>
            Add to cart
          </button>
          <img
            onClick={() => {
              // will chnage the svg to black and send request
            }}
            className={classes.productPage__clickers__heart}
            src={emptyHeart}
            alt="favorite"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPageView;
