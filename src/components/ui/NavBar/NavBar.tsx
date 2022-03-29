import { Link } from 'react-router-dom';
import { useState } from 'react';

import logoSvg from './snapsvg-seeklogo.com.svg';

import classes from './NavBar.module.scss';

const NavBar = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const pageWidth = window.innerWidth;

	const ToggleClass = () => {
		setActive(!isActive);
	};

	return (
		<header className={classes.header}>
			<div className={`${classes.container} ${classes.row}`}>
				<button className={classes.nav_toggle} onClick={ToggleClass}>
					<span className={classes.hamburger} />
				</button>
				<Link to="/" className={classes.logo}>
					<img className={classes.logo} src={logoSvg} alt="logo" />
				</Link>
				{/* <nav className={`nav${isActive ? 'nav--visible' : ''}`}> */}
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
					</ul>
				</nav>
			</div>
		</header>
	);
};

NavBar.displayName = 'NavBar';

export default NavBar;
