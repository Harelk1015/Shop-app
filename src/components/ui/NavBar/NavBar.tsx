import { Link } from 'react-router-dom';
// import './NavBar.scss';
import logoSvg from './snapsvg-seeklogo.com.svg';
import { useState } from 'react';
import classes from './NavBar.module.scss';

const NavBar = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const pageWidth = window.innerWidth;

  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.container} ${classes.row}`}>
        <button onClick={ToggleClass} className={classes.nav_toggle}>
          <span className={classes.hamburger}></span>
        </button>
        <Link to="/" className={classes.logo}>
          <img className={classes.logo} src={logoSvg} alt="logo" />
        </Link>
        {/* <nav className={`nav${isActive ? 'nav--visible' : ''}`}> */}
        <nav className={`${classes.nav} ${isActive ? classes.nav__visible : ''}`}>
          <ul className={`${classes.nav__list} ${classes.nav__list__primary}`}>
            <li className={`${classes.nav__item} ${classes.nav__search}`}>
              <input
                placeholder="Serch for items..."
                className="nav__input"
                type="text"
                id="serch"
                name="serch"
              />
            </li>
          </ul>
          <ul className={`${classes.nav__list} ${classes.nav__list__secondary}`}>
            <li className={classes.nav__item}>
              <Link
                to="/profile"
                className={classes.nav__link}
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Profile
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="/contact"
                className={classes.nav__link}
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Contact
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="/login"
                className={classes.nav__link}
                onClick={() => {
                  if (pageWidth < 880) {
                    ToggleClass();
                  }
                }}
              >
                Login
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link
                to="/register"
                className={classes.nav__link}
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
