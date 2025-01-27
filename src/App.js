import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImgHeader from './components/imgHeader';
import Nosotros from './pages/nosotros';
import Blogs from './pages/Blogs';
import Experiencias from './components/experiencias';
import Alianzas from './components/parthers';
import ViajesForm from './pages/viajes';
import Personalizadas from './pages/Personalizadas';
import Footer from './pages/footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import SuscribeteForm from './components/suscription';

function App() {
  return (
    <Router>
      <div className="App">
      
        <ImgHeader />
        <Nosotros />
        <Experiencias />
        <Personalizadas />
        <Blogs />
        <Alianzas />
        <ViajesForm />
        <SuscribeteForm/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;