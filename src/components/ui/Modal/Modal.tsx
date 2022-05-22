/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import classes from './Modal.module.scss';

interface IModal {
	readonly setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IModal> = ({ setOpenModal }) => {
	return (
		<>
			<div
				className={classes.modalBackground}
				onClick={() => {
					setOpenModal(false);
				}}
			/>
			<div className={classes.main}>Maybe one day .. <br />
			For now i can afford selling you lemonade ;)
			</div>
		</>
	);
};

Modal.displayName = 'Modal';

export default Modal;
