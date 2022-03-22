import './Login.scss';
import { Link } from 'react-router-dom';


const LoginView = () => {
  return (
    <div className="login">
    <h1 className="login__header">Login</h1>
    <div className="login__form">
      <form>
        <label htmlFor="username">UserName</label>
        <input type="text" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button className="login__form--btn">Submit</button>
        <Link className="login__form--switch" to="/register">
          Switch to Register
        </Link>
      </form>
    </div>
  </div>
  );
};

export default LoginView;
