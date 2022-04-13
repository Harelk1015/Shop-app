/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { tickets } from '../Profile/Profile';
import { IReactEvent } from '../../../utils/types';
import AdminPanelView from './AdminPanel.view';

const AdminPanel = () => {
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
	const [serach, setSearch] = useState('');
	const [prodName, setProdName] = useState('');
	const [prodPrice, setProdPrice] = useState<number>(Number);
	const [prodSizes, setProdSizes] = useState<string>('');
	const [prodId, setProdId] = useState('');

	const navigate = useNavigate();

	let sizes = [size36, size37, size38, size39, size40, size41, size42];

	const addProductHandler = () => {
		sizes = sizes.filter(Boolean);

		axios
			.post('https://harel-shop-backend.herokuapp.com/products/add-product', {
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
				.post('https://harel-shop-backend.herokuapp.com/products/get-product', { _id: event.target.value.toString() })
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
					setProdSizes('');
					setSearchLoading(false);
				});
		}
	};

	const editProductHandler = () => {
		console.log('before', prodSizes);
		let sizes;

		if (typeof prodSizes !== 'object') {
			sizes = prodSizes.split(',');
		} else {
			sizes = prodSizes;
		}

		console.log('after', sizes);

		axios
			.post('https://harel-shop-backend.herokuapp.com/products/edit-product', {
				_id: prodId,
				prodName,
				prodPrice,
				prodSizes: sizes,
			})
			.then((res: any) => {
				const _id = res.data._id;

				navigate(`/product-page?_id=${_id}`);
			})
			.catch((err) => {
				console.log(err);
			});
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
		/>
	);
};

AdminPanel.displayName = 'AdminPanel';

export default AdminPanel;
