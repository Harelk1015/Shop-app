/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import ProductItemView from './ProductItem.view';

// import { addFavorite, removeFavorite } from '../../../utils/favorite';

interface ProductItemProps {
	_id: string;
	name: string;
	price: number;
	imageUrl: string;
	userFavoritesId: string[] | undefined;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = ({
	_id,
	name,
	price,
	imageUrl,
	userFavoritesId,
	// userFavorites,
}) => {
	const [isFavorited, setIsFavorited] = useState<boolean>(false);

	useEffect(() => {
		if (userFavoritesId?.includes(_id)) {
			setIsFavorited(true);
		}
	}, [userFavoritesId]);

	return (
		<ProductItemView
			_id={_id}
			name={name}
			price={price}
			imageUrl={imageUrl}
			setIsFavorited={setIsFavorited}
			isFavorited={isFavorited}
		/>
	);
};

ProductItem.displayName = 'ProductItem';

export default ProductItem;
