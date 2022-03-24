import * as React from 'react';
import classes from './ProductsPage.module.scss';
import emptyHeart from './empty-heart.svg';

interface ProductItemViewProps {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductItemView: React.FunctionComponent<ProductItemViewProps> = ({
  _id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={classes.productItem}>
      <img className={classes.productItem__img} src={imageUrl} alt={name} />
      <div className={classes.productItem__details}>
        <div className={classes.productItem__details__text}>
          <h3 className={classes.productItem__details__text__name}>{name}</h3>
          <h3 className={classes.productItem__details__text__price}>{price} ILS</h3>
        </div>
        <img className={classes.productItem__heart} src={emptyHeart} alt="favorite" />
      </div>
    </div>
  );
};

export default ProductItemView;
