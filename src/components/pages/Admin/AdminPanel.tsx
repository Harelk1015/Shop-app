/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import { tickets } from '../Profile/Profile';
import AdminPanelView from './AdminPanel.view';

const AdminPanel = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [sex, setSex] = useState('');
	const [category, setCategory] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [size36, setSize36] = useState<number>(Number);
	const [size37, setSize37] = useState<number>(Number);
	const [size38, setSize38] = useState<number>(Number);
	const [size39, setSize39] = useState<number>(Number);
	const [size40, setSize40] = useState<number>(Number);
	const [size41, setSize41] = useState<number>(Number);
	const [size42, setSize42] = useState<number>(Number);

	const [serach, setSearch] = useState('');
	const [prodName, setProdName] = useState('');
	const [prodPrice, setProdPrice] = useState<number>(Number);
	const [prodSizes, setProdSizes] = useState<[]>([]);

	let sizes = [size36, size37, size38, size39, size40, size41, size42];

	const getInputs = () => {
		sizes = sizes.filter(Boolean);

		axios
			.post('http://localhost:3030/products/addProduct', {
				name,
				price,
				sex,
				category,
				imageUrl,
				sizes,
			})
			.then((res: any) => {
				console.log(res);

				if (res.data.accessToken) {
					localStorage.setItem('accessToken', res.data.accessToken);
				}
			})
			.catch((err) => {
				// errorMessageChangeHandler(err.response.data.message);
				console.log(err.response.data.message);
			});
	};

	return (
		<AdminPanelView
			tickets={tickets}
			name={name}
			price={price}
			sex={sex}
			category={category}
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
			setCategory={setCategory}
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
			getInputs={getInputs}
			sizes={sizes}
		/>
	);
};

AdminPanel.displayName = 'AdminPanel';

export default AdminPanel;
