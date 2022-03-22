import { Link } from 'react-router-dom';
import './NavBar.scss';
import logoSvg from './snapsvg-seeklogo.com.svg';
import { useState } from 'react';

const NavBar = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const pageWidth = window.innerWidth;

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="container row">
        <button onClick={ToggleClass} className="nav-toggle">
          <span className="hamburger"></span>
        </button>
        <Link to="/" className="logo">
          <img className="logo" src={logoSvg} alt="logo" />
        </Link>
        <nav className={`nav${isActive ? 'nav--visible' : ''}`}>
          <ul className="nav__list nav__list--primary">
            <li className="nav__item nav__search">
              <input
                placeholder="Serch for items..."
                className="nav__input"
                type="text"
                id="serch"
                name="serch"
              />
            </li>
          </ul>
          <ul className="nav__list nav__list--secondary">
            <li className="nav__item">
              <Link
                to="/profile"
                className="nav__link"
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Profile
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/login"
                className="nav__link"
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Login
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/register"
                className="nav__link"
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

export default NavBar;
