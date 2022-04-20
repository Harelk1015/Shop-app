import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../pages/Profile/Profile';
import cartPng from './cartImage.png';
import logoSvg from './snapsvg-seeklogo.com.svg';
import classes from './NavBar.module.scss';

interface IProps {
	ToggleClass: () => void;
	isActive: boolean;
	auth: {
		user: User;
		isAuth: boolean;
	};
	cart: {
		cartLength: number;
	};
	onLogout: () => void;
}

const NavBarView: React.FC<IProps> = ({ ToggleClass, isActive, auth, onLogout, cart }) => {
	const pageWidth = window.innerWidth;

	return (
		<header className={classes.header}>
			<div className={`${classes.container} ${classes.row}`}>
				<button className={classes.nav_toggle} onClick={ToggleClass}>
					<span className={classes.hamburger} />
				</button>
				<Link to="/" className={classes.logo}>
					<img className={classes.logo} src={logoSvg} alt="logo" />
				</Link>
				<nav className={`${classes.nav} ${isActive ? classes.nav__visible : ''}`}>
					<ul className={`${classes.nav__list} ${classes.nav__list__primary}`}>
						<li className={`${classes.nav__item} ${classes.nav__search}`}>
							<input
								placeholder="Serch for items..."
								className={classes.nav__input}
								type="text"
								id="serch"
								name="serch"
							/>
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
												ToggleClass();
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
												ToggleClass();
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
													ToggleClass();
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
												ToggleClass();
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
											ToggleClass();
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
											ToggleClass();
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
