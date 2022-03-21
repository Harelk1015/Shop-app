import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/ui/Footer/Footer';
import NavBar from './components/ui/NavBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sed est qui ea iusto
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
