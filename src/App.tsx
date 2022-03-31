import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/ui/Footer/Footer';
import NavBar from './components/ui/NavBar/NavBar';
import PageNotFound from './components/pages/404/PageNotFound';
import Contact from './components/pages/Contact/Contact';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Profile from './components/pages/Profile/Profile';
import AdminPanel from './components/pages/Admin/AdminPanel';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/products-page" element={<ProductsPage />} />
					<Route path="/product-page" element={<ProductPage />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/admin-panel" element={<AdminPanel />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			<Footer />
		</BrowserRouter>
	);
};

App.displayName = 'App';

export default App;
