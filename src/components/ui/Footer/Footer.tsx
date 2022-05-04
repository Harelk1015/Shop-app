import { Link } from 'react-router-dom';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.links}>
				<div className={`${classes.links__left} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Tools</h2>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Create</p>
						</li>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Paint</p>
						</li>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Style</p>
						</li>
					</ul>
				</div>
				<div className={`${classes.links__middle} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Credits</h2>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Harel</p>
						</li>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Kaufman</p>
						</li>
						<li>
							<Link to="#" />
							<p className={classes.nav__link}>Hagever</p>
						</li>
					</ul>
				</div>
				<div className={`${classes.links__right} ${classes.center}`}>
					<ul className={classes.list}>
						<h2>Social</h2>
						<li>
							<a href="https://www.instagram.com/harelkau" className={classes.nav__link}>
								Instagram
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/Harelk1015/" className={classes.nav__link}>
								Facebook
							</a>
						</li>
						<li>
							<a href="https://discord.gg/pAaFfX8" className={classes.nav__link}>
								Discord
							</a>
						</li>
						<li>
							<a href="https://github.com/Harelk1015" className={classes.nav__link}>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/harel-kaufman-61739821b/"
								className={classes.nav__link}
							>
								LinkedIn
							</a>
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
