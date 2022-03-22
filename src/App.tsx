import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import Footer from './components/ui/Footer/Footer';
import NavBar from './components/ui/NavBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
