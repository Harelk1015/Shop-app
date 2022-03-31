/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Tickets } from '../Profile/Profile';
import classes from './AdminPanel.module.scss';

interface IProps {
	tickets: Tickets;
}

const AdminPanelView: React.FC<IProps> = ({ tickets }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [sex, setSex] = useState('');
	const [category, setCategory] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [size36, setSize36] = useState<number>();
	const [size37, setSize37] = useState<number>();
	const [size38, setSize38] = useState<number>();
	const [size39, setSize39] = useState<number>();
	const [size40, setSize40] = useState<number>();
	const [size41, setSize41] = useState<number>();
	const [size42, setSize42] = useState<number>();

	let sizes = [size36, size37, size38, size39, size40, size41, size42];

	const ticketContent = tickets.map((ticket) => {
		return (
			<li className={classes.tickets__body__list__item} key={ticket._id}>
				Subject:
				{` ${ticket.subject}`} 
				<br />
				ticket ID: 
				{` ${ticket._id}`} 
				<hr />
			</li>
		);
	});

	const input = (label: string, type: string, name: string, changeFun: any, value?: string) => {
		if (value) {
			return (
				<>
					<label className={classes.label__radio} htmlFor={name}>
						{label}
					</label>
					<input
						value={label}
						className={classes.input}
						type={type}
						name={name}
						onChange={(event) => {
							changeFun(event.target.value);
						}}
					/>
				</>
			);
		} else {
			return (
				<>
					<label className={classes.label} htmlFor={name}>
						{label}
					</label>
					<input
						className={classes.input}
						type={type}
						name={name}
						onChange={(event) => {
							changeFun(event.target.value);
						}}
					/>
				</>
			);
		}
	};

	const getInputs = () => {
		console.log(name);
		console.log(price);
		console.log(sex);
		console.log(category);
		console.log(imageUrl);
		console.log(size36);
		console.log(size37);
		console.log(size38);
		console.log(size39);
		console.log(size40);
		console.log(size41);
		console.log(size42);

		sizes = sizes.filter(Boolean);

		console.log(sizes);
		// missing image url
	};

	return (
		<div className={classes.app}>
			<div className={`${classes.tickets} ${classes.card}`}>
				<h1 className={classes.card__header}>Tickets</h1>
				<div className={classes.tickets__body}>
					<ul className={classes.tickets__body__list}>{ticketContent}</ul>
				</div>
			</div>
			<div className={`${classes.addProduct} ${classes.card}`}>
				<h1 className={classes.card__header}>Add Product</h1>
				<form>
					{input('Product Name: ', 'text', 'name', setName)}
					<br />
					{input('Price (in $): ', 'number', 'price', setPrice)}
					<h3 className={classes.addProduct__headers}>Sex</h3>
					{input('Man', 'radio', 'sex', setSex, 'value')}
					{input('Woman', 'radio', 'sex', setSex, 'value')}
					<h3 className={classes.addProduct__headers}>Category</h3>
					{input('Shirt', 'radio', 'category', setCategory, 'value')}
					{input('Pants', 'radio', 'category', setCategory, 'value')}
					{input('Shoes', 'radio', 'category', setCategory, 'value')}
					<h3 className={classes.addProduct__headers}>Image Link</h3>
					{input('url: ', 'text', 'imageUrl', setImageUrl)}
					<h3 className={classes.addProduct__headers}>sizes</h3>
					{input('36', 'radio', '36', setSize36, 'value')}
					{input('37', 'radio', '37', setSize37, 'value')}
					{input('38', 'radio', '38', setSize38, 'value')}
					{input('39', 'radio', '39', setSize39, 'value')}
					{input('40', 'radio', '40', setSize40, 'value')}
					{input('41', 'radio', '41', setSize41, 'value')}
					{input('42', 'radio', '42', setSize42, 'value')}
					<button className={classes.addProduct__btn} type="button" onClick={getInputs}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

AdminPanelView.displayName = 'AdminPanelView';

export default AdminPanelView;
