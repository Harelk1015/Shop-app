import * as React from 'react';
import classes from './ProductsPage.module.scss';
import emptyHeart from './empty-heart.svg';
import { useNavigate } from 'react-router-dom';

interface ProductItemViewProps {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
}

const ProductItemView: React.FunctionComponent<ProductItemViewProps> = ({
  _id,
  name,
  price,
  imageUrl,
  sizes,
}) => {
  let navigate = useNavigate();
  return (
    <div className={classes.productItem}>
      <img
        onClick={() => {
          navigate(`/ProductPage?_id=${_id}`);
          window.scrollTo(0, 0);
        }}
        className={classes.productItem__img}
        src={imageUrl}
        alt={name}
      />
      <div className={classes.productItem__details}>
        <div
          onClick={() => {
            navigate(`/ProductPage?_id=${_id}`);
            window.scrollTo(0, 0);
          }}
          className={classes.productItem__details__text}
        >
          <h3 className={classes.productItem__details__text__name}>{name}</h3>
          <h3 className={classes.productItem__details__text__price}>
            {price} ILS
          </h3>
        </div>
        <img
          onClick={() => {
            // will chnage the svg to black and send request
          }}
          className={classes.productItem__heart}
          src={emptyHeart}
          alt="favorite"
        />
      </div>
    </div>
  );
};

export default ProductItemView;
