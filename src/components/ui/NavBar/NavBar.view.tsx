import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../pages/Profile/Profile';
import cartPng from '../../../assets/cart.png';
import { Product } from '../../pages/ProductsPage/ProductsPage';
import logoSvg from './snapsvg-seeklogo.com.svg';
import classes from './NavBar.module.scss';

interface IProps {
	ToggleNavMenu: () => void;
	isActive: boolean;
	auth: {
		user: User;
		isAuth: boolean;
	};
	cart: {
		cartLength: number;
	};
	onLogout: () => void;
	searchBarChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	navSearchProducts: Product[];
	setNavSearchProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const NavBarView: React.FC<IProps> = ({
	ToggleNavMenu,
	isActive,
	auth,
	onLogout,
	cart,
	searchBarChangeHandler,
	navSearchProducts,
	setNavSearchProducts,
}) => {
	const navigate = useNavigate();

	const pageWidth = window.innerWidth;
	let navSearchContent;

	if (navSearchProducts.length >= 1) {
		navSearchContent = navSearchProducts.map((product: Product) => {
			return (
				<li
					key={product._id}
					className={classes.nav__search__box__result}
					onClick={() => {
						navigate(`/product-page?_id=${product._id}`);
						setNavSearchProducts([]);
						ToggleNavMenu();
					}}
				>
					{product.name}
				</li>
			);
		});
	} else {
		navSearchContent = '';
	}

	return (
		<header className={classes.header}>
			<div className={`${classes.container} ${classes.row}`}>
				<button className={classes.nav_toggle} onClick={ToggleNavMenu}>
					<span className={classes.hamburger} />
				</button>
				<Link to="/" className={classes.logo}>
					<img className={classes.logo} src={logoSvg} alt="logo" />
				</Link>
				<nav className={`${classes.nav} ${isActive ? classes.nav__visible : ''}`}>
					<ul className={`${classes.nav__list} ${classes.nav__list__primary}`}>
						<li className={`${classes.nav__item} ${classes.nav__search}`}>
							<input
								placeholder="Serch items..."
								className={classes.nav__input}
								type="none"
								id="serch"
								autoComplete="none"
								name="serch"
								onChange={(event) => {
									searchBarChangeHandler(event);
								}}
								onFocus={(event) => {
									searchBarChangeHandler(event);
								}}
								onBlur={() => {
									setTimeout(() => {
										setNavSearchProducts([]);
									}, 150);
								}}
							/>
							<ul className={classes.nav__search__box}>{navSearchContent}</ul>
						</li>
					</ul>
					<ul className={`${classes.nav__list} ${classes.nav__list__secondary}`}>
						{auth.isAuth && (
							<>
								<span className={classes.nav__cart__number}>{cart.cartLength}</span>
								<a href="/cart" className={classes.nav__item}>
									<img src={cartPng} className={classes.nav__cart} />
								</a>

								<li className={classes.nav__item}>
									<Link
										to="/profile"
										className={classes.nav__link}
										onClick={() => {
											if (pageWidth < 880) {
												ToggleNavMenu();
											}
										}}
									>
										Profile
									</Link>
								</li>
								<li className={classes.nav__item}>
									<Link
										to="/contact"
										className={classes.nav__link}
										onClick={() => {
											if (pageWidth < 880) {
												ToggleNavMenu();
											}
										}}
									>
										Contact
									</Link>
								</li>
								{auth.user?.role === 'admin' && (
									<li className={classes.nav__item}>
										<Link
											to="/admin-panel"
											className={classes.nav__link}
											onClick={() => {
												if (pageWidth < 880) {
													ToggleNavMenu();
												}
											}}
										>
											Admin Panel
										</Link>
									</li>
								)}
								<li className={classes.nav__item}>
									<span
										className={classes.nav__link}
										onClick={() => {
											onLogout();

											if (pageWidth < 880) {
												ToggleNavMenu();
											}
										}}
									>
										Logout
									</span>
								</li>
							</>
						)}
						{!auth.isAuth && (
							<li className={classes.nav__item}>
								<Link
									to="/login"
									className={classes.nav__link}
									onClick={() => {
										if (pageWidth < 880) {
											ToggleNavMenu();
										}
									}}
								>
									Login
								</Link>
							</li>
						)}
						{!auth.isAuth && (
							<li className={classes.nav__item}>
								<Link
									to="/register"
									className={classes.nav__link}
									onClick={() => {
										if (pageWidth < 880) {
											ToggleNavMenu();
										}
									}}
								>
									Register
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

NavBarView.displayName = 'NavBarView';

export default NavBarView;
