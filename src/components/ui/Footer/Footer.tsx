import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="links">
        <div className="links__left">
          <ul className="list">
            <h2>Tools</h2>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
          </ul>
        </div>
        <div className="links__middle">
          <ul className="list">
            <h2>Tools</h2>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
          </ul>
        </div>
        <div className="links__right">
          <ul className="list">
            <h2>Tools</h2>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
            <li>
              <Link to="#" className="nav__link" />
              Link
            </li>
          </ul>
        </div>
      </div>
      <p>
        © 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks,
        copyrights, and brands are the property of their respective owners.
      </p>
    </footer>
  );
}

export default Footer;
