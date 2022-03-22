import './Register.scss';
import { Link } from 'react-router-dom';

const RegisterView = () => {
  return (
    <div className="register">
      <h1 className="register__header">Register</h1>
      <div className="register__form">
        <form>
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" />
          <label htmlFor="e-mail">E-Mail</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button className="register__form--btn">Submit</button>
          <Link className="register__form--switch" to="/login">
            Switch to login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
