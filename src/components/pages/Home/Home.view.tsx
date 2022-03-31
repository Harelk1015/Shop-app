import { Link } from 'react-router-dom';
import { useState } from 'react';
import img from '../../../assets/pants.jpeg';
import woman from '../../../assets/woman.jpeg';
import man from '../../../assets/man.jpeg';

import classes from './Home.module.scss';

// let classes

const HomeView = () => {
	const [manDialog, setManDialog] = useState(false);
	const [womanDialog, setWomanDialog] = useState(false);
	const [pantsDialog, setPantsDialog] = useState(false);

	return (
		<>
			<div className={classes.main}>
				<div className={classes.main__container}>
					<h2 className={classes.main__container__text}>UP TO 30% OFF ON ALL PANTS</h2>
					<div className={classes.main__container__img}>
						<img
							src={img}
							alt="picture of pants"
							onClick={() => {
								setPantsDialog(!pantsDialog);
								// eslint-disable-next-line no-trailing-spaces

								if (!pantsDialog) {
									window.scrollBy({ left: 0, top: 180, behavior: 'smooth' });
								}
							}}
						/>
						{pantsDialog && (
							<dialog open className={classes.dialog}>
								<button className={classes.dialog__btn}>
									<Link
										to="products-page?gender=Woman&category=Pants"
										className={classes.dialog__btn}
										onClick={() => {
											window.scrollTo(0, 0);
										}}
									>
										Woman
									</Link>
								</button>
								<hr />
								<button className={classes.dialog__btn}>
									<Link
										to="products-page?gender=Male&category=Pants"
										className={classes.dialog__btn}
										onClick={() => {
											window.scrollTo(0, 0);
										}}
									>
										Man
									</Link>
								</button>
							</dialog>
						)}
					</div>
				</div>
			</div>
			<div className={classes.second}>
				<div className={classes.second__container}>
					<h1 className="header">Shopping for</h1>
					<div className={classes.second__section}>
						<div className={classes.second__woman}>
							<h2
								className={classes.second__woman__text}
								onClick={() => {
									setWomanDialog(!womanDialog);
									// eslint-disable-next-line no-trailing-spaces

									if (!womanDialog) {
										window.scrollBy({ left: 0, top: 180, behavior: 'smooth' });
									}
								}}
							>
								Woman
							</h2>
							<img
								src={woman}
								alt="woman"
								className={classes.second__img}
								onClick={() => {
									setWomanDialog(!womanDialog);
									// eslint-disable-next-line no-trailing-spaces

									if (!womanDialog) {
										window.scrollBy({ left: 0, top: 180, behavior: 'smooth' });
									}
								}}
							/>
							{womanDialog && (
								<dialog open className={classes.dialog}>
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Woman&category=Shirts"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Shirts
										</Link>
									</button>
									<hr />
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Woman&category=Pants"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Pants
										</Link>
									</button>
									<hr />
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Woman&category=Shoes"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Shoes
										</Link>
									</button>
								</dialog>
							)}
						</div>
						<div className={classes.second__man}>
							<h2
								className={classes.second__man__text}
								onClick={() => {
									setManDialog(!manDialog);

									if (!manDialog) {
										window.scrollBy({ left: 0, top: 180, behavior: 'smooth' });
									}
								}}
							>
								Man
							</h2>
							<img
								src={man}
								alt="Man"
								className={classes.second__img}
								onClick={() => {
									setManDialog(!manDialog);
									// eslint-disable-next-line no-trailing-spaces

									if (!manDialog) {
										window.scrollBy({ left: 0, top: 180, behavior: 'smooth' });
									}
								}}
							/>
							{manDialog && (
								<dialog open className={classes.dialog}>
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Man&category=Shirts"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Shirts
										</Link>
									</button>
									<hr />
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Man&category=Pants"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Pants
										</Link>
									</button>
									<hr />
									<button className={classes.dialog__btn}>
										<Link
											to="products-page?gender=Man&category=Shoes"
											className={classes.dialog__btn}
											onClick={() => {
												window.scrollTo(0, 0);
											}}
										>
											Shoes
										</Link>
									</button>
								</dialog>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

HomeView.displayName = HomeView;

export default HomeView;
