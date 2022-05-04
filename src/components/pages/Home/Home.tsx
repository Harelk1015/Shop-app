import { useState } from 'react';
import HomeView from './Home.view';

const Home = () => {
	const [manDialog, setManDialog] = useState(false);
	const [womanDialog, setWomanDialog] = useState(false);
	const [PantsDialog, setPantsDialog] = useState(false);

	return (
		<HomeView
			setManDialog={setManDialog}
			setWomanDialog={setWomanDialog}
			setPantsDialog={setPantsDialog}
			manDialog={manDialog}
			womanDialog={womanDialog}
			PantsDialog={PantsDialog}
		/>
	);
};

Home.displayName = 'Home';

export default Home;
