import './Home.scss';
import img from './pants.jpeg';
import woman from './woman.jpeg';
import man from './man.jpeg';

const HomeView = () => {
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
              <h2 className="second__woman__text">Woman</h2>
              <img src={woman} alt="woman" className="second__img" />
            </div>
            <div className="second__man">
              <h2 className="second__man__text">Man</h2>
              <img src={man} alt="Man" className="second__img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
