import './Contact.scss';

const ContactView = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1>Contact</h1>
      </div>
      <div className="main">
        <form className="main__form">
          <label className="main__form__label" htmlFor="subject">
            Subject
          </label>
          <input className="main__form__input" type="text" name="subject" />
          <label className="main__form__label" htmlFor="E-Mail">
            E-Mail
          </label>
          <input className="main__form__input" type="email" name="E-Mail" />
          <label className="main__form__label" htmlFor="message">
            Message
          </label>
          <textarea className="main__form__message" name="message" />
          <button className="main__form--btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactView;
