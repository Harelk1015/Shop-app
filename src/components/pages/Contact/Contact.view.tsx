import classes from './Contact.module.scss';

const ContactView = () => {
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
					<input className={classes.main__form__input} type="text" name="subject" />
					<label className={classes.main__form__label} htmlFor="E-Mail">
						E-Mail
					</label>
					<input className={classes.main__form__input} type="email" name="E-Mail" />
					<label className={classes.main__form__label} htmlFor="message">
						Message
					</label>
					<textarea className={classes.main__form__message} name="message" />
					<button className={classes.main__form__btn}>Submit</button>
				</form>
			</div>
		</div>
	);
};

ContactView.displayName = 'ContactView';

export default ContactView;
