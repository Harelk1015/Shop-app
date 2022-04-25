/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { IReactEvent, Ticket } from '../../../utils/types';

import AdminPanelView from './AdminPanel.view';

const AdminPanel = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [price, setPrice] = useState<number>(0);
	const [sex, setSex] = useState('');
	const [kind, setKind] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [size36, setSize36] = useState<number>(Number);
	const [size37, setSize37] = useState<number>(Number);
	const [size38, setSize38] = useState<number>(Number);
	const [size39, setSize39] = useState<number>(Number);
	const [size40, setSize40] = useState<number>(Number);
	const [size41, setSize41] = useState<number>(Number);
	const [size42, setSize42] = useState<number>(Number);

	const [searchLoading, setSearchLoading] = useState<boolean>();
	const [editLoading, setEditLoading] = useState<boolean>(false);
	const [editMessage, setEditMessage] = useState<string>('');
	const [editErrMessage, setEditErrMessage] = useState<string>('');
	const [serach, setSearch] = useState('');
	const [prodName, setProdName] = useState('');
	const [prodPrice, setProdPrice] = useState<number>();
	const [prodSizes, setProdSizes] = useState<[] | string>();
	const [prodId, setProdId] = useState('');

	const [tickets, setTickets] = useState<Ticket[]>([]);

	let sizes = [size36, size37, size38, size39, size40, size41, size42];

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BACKEND_URL + '/ticket/get-tickets')
			.then((res) => {
				setTickets(res.data.tickets);
			})
			.catch((err) => {
				console.log(err.response.data.message);
			});
	}, []);

	const addProductHandler = () => {
		sizes = sizes.filter(Boolean);

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/products/add-product', {
				name,
				price,
				sex,
				category: { sex, kind },
				imageUrl,
				sizes,
			})
			.then((res: any) => {
				const _id = res.data.message._id;

				navigate(`/product-page?_id=${_id}`);
			})
			.catch((err) => {
				console.log(err?.response?.data?.message);
			});
	};

	const editProductChangeHandler = (event: IReactEvent) => {
		if (event.target.value.length > 22) {
			setProdId(event.target.value);
			setSearchLoading(true);
			axios
				.post(process.env.REACT_APP_BACKEND_URL + '/products/get-product', {
					_id: event.target.value.toString(),
				})
				.then((res) => {
					console.log(res.data.product);
					setProdName(res.data.product.name);
					setProdPrice(res.data.product.price);
					setProdSizes(res.data.product.sizes);
					setSearchLoading(false);
				})
				.catch(() => {
					setProdName('');
					setProdPrice(0);
					setProdSizes([]);
					setSearchLoading(false);
				});
		} else {
			setProdName('');
			setProdPrice(0);
			setProdSizes([]);
			setSearchLoading(false);
		}
	};

	const editProductHandler = () => {
		let tempSizes;

		if (typeof prodSizes !== 'object' && prodSizes !== null) {
			tempSizes = prodSizes!.split(',');
		} else {
			tempSizes = prodSizes;
		}

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/products/edit-product', {
				_id: prodId,
				prodName,
				prodPrice,
				prodSizes: tempSizes,
			})
			.then((res: any) => {
				setEditLoading(false);
				const _id = res.data._id;

				navigate(`/product-page?_id=${_id}`);
			})
			.catch((err) => {
				setEditLoading(false);
				setEditMessage('');
				setEditErrMessage(err.response.data.message);
			});
	};

	const deleteProductHandler = async () => {
		setEditLoading(true);

		try {
			const res = await axios.post(process.env.REACT_APP_BACKEND_URL + '/products/delete-product', {
				_id: prodId,
			});

			if (!res) {
				return;
			}

			setEditLoading(false);
			setEditErrMessage('');
			setEditMessage(res.data.message);
		} catch (err: any) {
			setEditLoading(false);
			setEditMessage('');
			setEditErrMessage(err.response.data.message);
		}
	};

	return (
		<AdminPanelView
			tickets={tickets}
			name={name}
			price={price}
			sex={sex}
			kind={kind}
			imageUrl={imageUrl}
			size36={size36}
			size37={size37}
			size38={size38}
			size39={size39}
			size40={size40}
			size41={size41}
			size42={size42}
			search={serach}
			prodName={prodName}
			prodPrice={prodPrice}
			prodSizes={prodSizes}
			setName={setName}
			setPrice={setPrice}
			setSex={setSex}
			setKind={setKind}
			setImageUrl={setImageUrl}
			setSize36={setSize36}
			setSize37={setSize37}
			setSize38={setSize38}
			setSize39={setSize39}
			setSize40={setSize40}
			setSize41={setSize41}
			setSize42={setSize42}
			setSearch={setSearch}
			setProdName={setProdName}
			setProdPrice={setProdPrice}
			setProdSizes={setProdSizes}
			addProductHandler={addProductHandler}
			editProductHandler={editProductHandler}
			editProductChangeHandler={editProductChangeHandler}
			sizes={sizes}
			searchLoading={searchLoading}
			deleteProductHandler={deleteProductHandler}
			editLoading={editLoading}
			editMessage={editMessage}
			editErrMessage={editErrMessage}
		/>
	);
};

AdminPanel.displayName = 'AdminPanel';

export default AdminPanel;
