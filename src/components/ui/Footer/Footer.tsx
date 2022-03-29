import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer>
			<div className={classes.links}>
				<div className={`${classes.links__left} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Tools</h2>
						<li>
							<Link to="#" className={classes.nav__link} />
							Create
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Paint
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Style
						</li>
					</ul>
				</div>
				<div className={`${classes.links__middle} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Credits</h2>
						<li>
							<Link to="#" className={classes.nav__link} />
							Harel
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Kaufman
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Hagever
						</li>
					</ul>
				</div>
				<div className={`${classes.links__right} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Social</h2>
						<li>
							<Link to="#" className={classes.nav__link} />
							Instagram
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Facebook
						</li>
						<li>
							<Link to="#" className={classes.nav__link} />
							Discord
						</li>
					</ul>
				</div>
			</div>
			<p className={classes.nav__copyrights}>
				© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks,
				copyrights, and brands are the property of their respective owners.
			</p>
		</footer>
	);
};

Footer.displayName = 'Footer';

export default Footer;
