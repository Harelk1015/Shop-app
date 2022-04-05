/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tickets } from '../Profile/Profile';
import classes from './AdminPanel.module.scss';

interface IProps {
	tickets: Tickets;
	name: string;
	price: string;
	sex: string;
	category: string;
	imageUrl: string;
	size36: number;
	size37: number;
	size38: number;
	size39: number;
	size40: number;
	size41: number;
	size42: number;
	search: string;
	prodName: string;
	prodPrice: number;
	prodSizes: [];
	setName: React.Dispatch<React.SetStateAction<string>>;
	setPrice: React.Dispatch<React.SetStateAction<string>>;
	setSex: React.Dispatch<React.SetStateAction<string>>;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	setSize36: React.Dispatch<React.SetStateAction<number>>;
	setSize37: React.Dispatch<React.SetStateAction<number>>;
	setSize38: React.Dispatch<React.SetStateAction<number>>;
	setSize39: React.Dispatch<React.SetStateAction<number>>;
	setSize40: React.Dispatch<React.SetStateAction<number>>;
	setSize41: React.Dispatch<React.SetStateAction<number>>;
	setSize42: React.Dispatch<React.SetStateAction<number>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	setProdName: React.Dispatch<React.SetStateAction<string>>;
	setProdPrice: React.Dispatch<React.SetStateAction<number>>;
	setProdSizes: React.Dispatch<React.SetStateAction<[]>>;
	getInputs: () => void;
	sizes: number[];
}

const AdminPanelView: React.FC<IProps> = ({
	tickets,
	prodName,
	prodPrice,
	prodSizes,
	setName,
	setPrice,
	setSex,
	setCategory,
	setImageUrl,
	setSize36,
	setSize37,
	setSize38,
	setSize39,
	setSize40,
	setSize41,
	setSize42,
	setSearch,
	setProdName,
	setProdPrice,
	setProdSizes,
	getInputs,
}) => {
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any

	const ticketContent = tickets.map((ticket) => {
		return (
			<li
				className={classes.tickets__body__list__item}
				key={ticket._id}
				onClick={() => {
					navigate(`/ticket-page?_id=${ticket._id}`);
				}}
			>
				Subject:
				{` ${ticket.subject}`}
				<br />
				Ticket ID:
				{` ${ticket._id}`}
				<hr />
			</li>
		);
	});

	const input = (
		label: string,
		type: string,
		name: string,
		changeFun: any,
		kind?: 'edit' | 'radio' | string,
		valueName?: any,
	) => {
		if (kind === 'radio') {
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
		} else if (kind === 'edit') {
			return (
				<>
					<label className={classes.label} htmlFor={name}>
						{label}
					</label>
					<input
						value={valueName}
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
					{input('Man', 'radio', 'sex', setSex, 'radio')}
					{input('Woman', 'radio', 'sex', setSex, 'radio')}
					<h3 className={classes.addProduct__headers}>Category</h3>
					{input('Shirt', 'radio', 'category', setCategory, 'radio')}
					{input('Pants', 'radio', 'category', setCategory, 'radio')}
					{input('Shoes', 'radio', 'category', setCategory, 'radio')}
					<h3 className={classes.addProduct__headers}>Image Link</h3>
					{input('url: ', 'text', 'imageUrl', setImageUrl)}
					<h3 className={classes.addProduct__headers}>sizes</h3>
					{input('36', 'radio', '36', setSize36, 'radio')}
					{input('37', 'radio', '37', setSize37, 'radio')}
					{input('38', 'radio', '38', setSize38, 'radio')}
					{input('39', 'radio', '39', setSize39, 'radio')}
					{input('40', 'radio', '40', setSize40, 'radio')}
					{input('41', 'radio', '41', setSize41, 'radio')}
					{input('42', 'radio', '42', setSize42, 'radio')}
					<button className={classes.addProduct__btn} type="button" onClick={getInputs}>
						Submit
					</button>
				</form>
			</div>
			<div className={`${classes.editProduct} ${classes.card}`}>
				<h1 className={classes.card__header}>Edit Product</h1>
				<input
					type="text"
					className={classes.editProduct__search}
					placeholder="Search by name"
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
				<div className={classes.editProduct__body}>
					{input('Product Name: ', 'text', 'name', setProdName, 'edit', prodName)}
					<br />
					{input('Product Price: ', 'number', 'price', setProdPrice, 'edit', prodPrice)}
					<br />
					{input('Product Sizes: ', 'text', 'sizes', setProdSizes, 'edit', prodSizes)}
					<br />
					{prodName && <p>Product ID : {prodName}</p>}
					{prodName && <button className={classes.editProduct__body__btn}>Update</button>}
				</div>
			</div>
		</div>
	);
};

AdminPanelView.displayName = 'AdminPanelView';

export default AdminPanelView;
