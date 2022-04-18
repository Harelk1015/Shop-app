import React, { useEffect, useState } from 'react';
import classes from './Select.module.scss';

interface ISelect {
	quantity: string;
	_id: string;
	cartItemHandler: (quantity: number, id: string) => void;
}

const Select: React.FC<ISelect> = ({ quantity, _id, cartItemHandler }) => {
	const [itemQuantity, setItemQuantity] = useState<string>();

	useEffect(() => {
		setItemQuantity(quantity);
	}, []);

	return (
		<select
			className={classes}
			id={_id}
			name="quantity"
			value={itemQuantity}
			onChange={(event) => {
				cartItemHandler(parseInt(event.target.value), _id);
				setItemQuantity(event.target.value);
			}}
		>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
		</select>
	);
};

Select.displayName = 'Select';

export default Select;
