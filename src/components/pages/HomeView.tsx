import './Home.scss';
import img from './pants.jpeg';
import woman from './woman.jpeg';
import man from './man.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeView = () => {
  const [manDialog, setManDialog] = useState(false);
  const [womanDialog, setWomanDialog] = useState(false);
  return (
    // <main className="app">
    <>
      <div className="main__dis">
        <div className="main__container">
          <h2 className="main__text">UP TO 30% OFF ON ALL PANTS</h2>
          <div className="main__img">
            <img src={img} alt="picture of pants" />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="second__container">
          <h1 className="header">Shopping for</h1>
          <div className="second__section">
            <div className="second__woman">
              <h2 onClick={() => {
                  setWomanDialog(true);
                }} className="second__woman__text">Woman</h2>
              <img onClick={() => {
                  setWomanDialog(true);
                }} src={woman} alt="woman" className="second__img" />
              {womanDialog && (
                <dialog open className="dialog">
                  <button className="dialog--btn"><Link to='woman/shirts' className='dialog--btn'>Shirts</Link></button>
                  <hr></hr>
                  <button className="dialog--btn"><Link to='woman/pants' className='dialog--btn'>Pants</Link></button>
                  <hr></hr>
                  <button className="dialog--btn"><Link to='woman/shoes' className='dialog--btn'>Shoes</Link></button>
                </dialog>
              )}
            </div>
            <div className="second__man">
              <h2
                onClick={() => {
                  setManDialog(true);
                }}
                className="second__man__text"
              >
                Man
              </h2>
              <img
                onClick={() => {
                  setManDialog(true);
                }}
                src={man}
                alt="Man"
                className="second__img"
              />
              {manDialog && (
                <dialog open className="dialog">
                  <button className="dialog--btn"><Link to='man/shirts' className='dialog--btn'>Shirts</Link></button>
                  <hr></hr>
                  <button className="dialog--btn"><Link to='man/pants' className='dialog--btn'>Pants</Link></button>
                  <hr></hr>
                  <button className="dialog--btn"><Link to='man/shoes' className='dialog--btn'>Shoes</Link></button>
                </dialog>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
