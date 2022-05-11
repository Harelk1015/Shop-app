import React from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner/LoadingSpinner';
import classes from './Contact.module.scss';

interface IContactViewProps {
	readonly setSubjectState: React.Dispatch<React.SetStateAction<string>>;
	readonly setMessageState: React.Dispatch<React.SetStateAction<string>>;
	readonly contactSubmitHandler: (event: React.FormEvent) => void;

	readonly isLoading: boolean;
	readonly submitMessage: string;
	readonly submitErrMessage: string;
}

const ContactView: React.FC<IContactViewProps> = ({
	setSubjectState,
	setMessageState,
	contactSubmitHandler,
	isLoading,
	submitMessage,
	submitErrMessage,
}) => {
	return (
		<div className={classes.contact}>
			<div className={classes.contact__header}>
				<h1>Contact</h1>
			</div>
			<div className={classes.main}>
				<form className={classes.main__form}>
					<label className={classes.main__form__label} htmlFor="subject">
						Subject
					</label>
					<input
						className={classes.main__form__input}
						type="text"
						name="subject"
						onChange={(event) => {
							setSubjectState(event.target.value);
						}}
					/>

					<label className={classes.main__form__label} htmlFor="message">
						Message
					</label>
					<textarea
						className={classes.main__form__message}
						name="message"
						onChange={(event) => {
							setMessageState(event.target.value);
						}}
					/>
					{isLoading ? (
						<LoadingSpinner />
					) : (
						<>
							{submitMessage && (
								<p className={classes.main__form__res__good}>{submitMessage}</p>
							)}
							{submitErrMessage && (
								<p className={classes.main__form__res__err}>{submitErrMessage}</p>
							)}
							<button
								className={classes.main__form__btn}
								onClick={(event: React.FormEvent) => {
									contactSubmitHandler(event);
								}}
							>
								Submit
							</button>
						</>
					)}
				</form>
			</div>
		</div>
	);
};

ContactView.displayName = 'ContactView';

export default ContactView;
