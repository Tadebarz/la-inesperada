import { Navbar1 } from './Navbar.jsx';
import Carrousel from './Carrousel';
import Variedades from './Variedades';
import Nosotros from './Nosotros';
import Noticias from './Noticias';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const Layout = () => {

  return (
    <>
    <div className="App">
      <Navbar1></Navbar1>
      <Carrousel></Carrousel>
      <Noticias></Noticias>
      <Variedades></Variedades>
      <Nosotros></Nosotros>
      <Footer></Footer>
      </div>
    </>
    
  );
};

export default Layout;
