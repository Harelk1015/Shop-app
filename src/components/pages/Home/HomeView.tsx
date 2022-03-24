import './Home.scss';
import img from './pants.jpeg';
import woman from './woman.jpeg';
import man from './man.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeView = () => {
  const [manDialog, setManDialog] = useState(false);
  const [womanDialog, setWomanDialog] = useState(false);
  const [pantsDialog, setPantsDialog] = useState(false);
  return (
    <>
      <div className="main__dis">
        <div className="main__container">
          <h2 className="main__text">UP TO 30% OFF ON ALL PANTS</h2>
          <div className="main__img">
            <img
              onClick={() => {
                setPantsDialog(!pantsDialog);
                if (!pantsDialog) {
                  window.scrollBy({left:0, top:180, behavior:'smooth'});
                }
              }}
              src={img}
              alt="picture of pants"
            />
            {pantsDialog && (
              <dialog open className="dialog">
                <button className="dialog--btn">
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="productsPage?gender=Woman&category=Pants"
                    className="dialog--btn"
                  >
                    Woman
                  </Link>
                </button>
                <hr></hr>
                <button className="dialog--btn">
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to="productsPage?gender=Male&category=Pants"
                    className="dialog--btn"
                  >
                    Man
                  </Link>
                </button>
              </dialog>
            )}
          </div>
        </div>
      </div>
      <div className="second">
        <div className="second__container">
          <h1 className="header">Shopping for</h1>
          <div className="second__section">
            <div className="second__woman">
              <h2
                onClick={() => {
                  setWomanDialog(!womanDialog);
                  if (!womanDialog) {
window.scrollBy({left:0, top:180, behavior:'smooth'});
                  }
                }}
                className="second__woman__text"
              >
                Woman
              </h2>
              <img
                onClick={() => {
                  setWomanDialog(!womanDialog);
                  if (!womanDialog) {
window.scrollBy({left:0, top:180, behavior:'smooth'});
                  }
                }}
                src={woman}
                alt="woman"
                className="second__img"
              />
              {womanDialog && (
                <dialog open className="dialog">
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Woman&category=Shirts"
                      className="dialog--btn"
                    >
                      Shirts
                    </Link>
                  </button>
                  <hr></hr>
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Woman&category=Pants"
                      className="dialog--btn"
                    >
                      Pants
                    </Link>
                  </button>
                  <hr></hr>
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Woman&category=Shoes"
                      className="dialog--btn"
                    >
                      Shoes
                    </Link>
                  </button>
                </dialog>
              )}
            </div>
            <div className="second__man">
              <h2
                onClick={() => {
                  setManDialog(!manDialog);
                  if (!manDialog) {
window.scrollBy({left:0, top:180, behavior:'smooth'});
                  }
                }}
                className="second__man__text"
              >
                Man
              </h2>
              <img
                onClick={() => {
                  setManDialog(!manDialog);
                  if (!manDialog) {
window.scrollBy({left:0, top:180, behavior:'smooth'});
                  }
                }}
                src={man}
                alt="Man"
                className="second__img"
              />
              {manDialog && (
                <dialog open className="dialog">
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Man&category=Shirts"
                      className="dialog--btn"
                    >
                      Shirts
                    </Link>
                  </button>
                  <hr></hr>
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Man&category=Pants"
                      className="dialog--btn"
                    >
                      Pants
                    </Link>
                  </button>
                  <hr></hr>
                  <button className="dialog--btn">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="productsPage?gender=Man&category=Shoes"
                      className="dialog--btn"
                    >
                      Shoes
                    </Link>
                  </button>
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
