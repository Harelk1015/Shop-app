/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../../../utils/types';

import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';

import classes from './AdminPanel.module.scss';

interface IProps {
	readonly tickets: Ticket[];
	readonly name: string;
	readonly price: number;
	readonly sex: string;
	readonly kind: string;
	readonly imageUrl: string;
	readonly size36: number;
	readonly size37: number;
	readonly size38: number;
	readonly size39: number;
	readonly size40: number;
	readonly size41: number;
	readonly size42: number;
	readonly search: string;
	readonly prodName: string;
	readonly prodPrice: number | undefined;
	readonly prodSizes: string | [] | undefined;
	readonly sizes: number[];
	readonly searchLoading: boolean | undefined;
	readonly editLoading: boolean;
	readonly editMessage: string;
	readonly editErrMessage: string;
	readonly setName: React.Dispatch<React.SetStateAction<string>>;
	readonly setPrice: React.Dispatch<React.SetStateAction<number>>;
	readonly setSex: React.Dispatch<React.SetStateAction<string>>;
	readonly setKind: React.Dispatch<React.SetStateAction<string>>;
	readonly setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	readonly setSize36: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize37: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize38: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize39: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize40: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize41: React.Dispatch<React.SetStateAction<number>>;
	readonly setSize42: React.Dispatch<React.SetStateAction<number>>;
	readonly setSearch: React.Dispatch<React.SetStateAction<string>>;
	readonly setProdName: React.Dispatch<React.SetStateAction<string>>;
	readonly setProdPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
	readonly setProdSizes: React.Dispatch<React.SetStateAction<string | [] | undefined>>;
	readonly editProductChangeHandler: (event: any) => void;
	readonly addProductHandler: () => void;
	readonly editProductHandler: () => void;
	readonly deleteProductHandler: () => Promise<void>;
}

const AdminPanelView: React.FC<IProps> = ({
	tickets,
	prodName,
	prodPrice,
	prodSizes,
	setName,
	setPrice,
	setSex,
	setKind,
	setImageUrl,
	setSize36,
	setSize37,
	setSize38,
	setSize39,
	setSize40,
	setSize41,
	setSize42,
	setProdName,
	setProdPrice,
	setProdSizes,
	addProductHandler,
	editProductChangeHandler,
	editProductHandler,
	searchLoading,
	deleteProductHandler,
	editLoading,
	editMessage,
	editErrMessage,
}) => {
	const navigate = useNavigate();

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
					<h3 className={classes.addProduct__headers}>kind</h3>
					{input('Shirts', 'radio', 'kind', setKind, 'radio')}
					{input('Pants', 'radio', 'kind', setKind, 'radio')}
					{input('Shoes', 'radio', 'kind', setKind, 'radio')}
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
					<button className={classes.addProduct__btn} type="button" onClick={addProductHandler}>
						Submit
					</button>
				</form>
			</div>
			<div className={`${classes.editProduct} ${classes.card}`}>
				<h1 className={classes.card__header}>Edit Product</h1>
				<input
					type="text"
					className={classes.editProduct__search}
					placeholder="Search by ID"
					onChange={(event) => {
						editProductChangeHandler(event);
					}}
				/>
				{searchLoading && <LoadingSpinner />}
				<div className={classes.editProduct__body}>
					{input('Product Name: ', 'text', 'name', setProdName, 'edit', prodName)}
					<br />
					{input('Product Price: ', 'number', 'price', setProdPrice, 'edit', prodPrice)}
					<br />
					{input('Product Sizes: ', 'text', 'sizes', setProdSizes, 'edit', prodSizes)}
					<br />
					{prodName && (
						<>
							{editLoading ? (
								<LoadingSpinner />
							) : (
								<>
									{editErrMessage && (
										<p className={classes.editProduct__body__errorMessage}>
											{editErrMessage}
										</p>
									)}
									{editMessage && (
										<p className={classes.editProduct__body__message}>{editMessage}</p>
									)}
									<button
										className={classes.editProduct__body__btn}
										onClick={() => {
											editProductHandler();
										}}
									>
										Update
									</button>
									<button
										className={classes.editProduct__body__delete__btn}
										onClick={() => {
											deleteProductHandler();
										}}
									>
										Delete
									</button>
								</>
							)}
							{/* {editLoading ? <LoadingSpinner /> : ''} */}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

AdminPanelView.displayName = 'AdminPanelView';

export default AdminPanelView;
