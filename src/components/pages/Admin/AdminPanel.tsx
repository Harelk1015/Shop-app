import { tickets } from '../Profile/Profile';
import AdminPanelView from './AdminPanel.view';

const AdminPanel = () => {
	return <AdminPanelView tickets={tickets} />;
};

AdminPanel.displayName = 'AdminPanel';

export default AdminPanel;
