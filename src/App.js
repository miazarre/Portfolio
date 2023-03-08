import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Accueil from './components/Accueil';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Informations from './components/Informations';
import Parcours from './components/Parcours';
import Projets from './components/Projets';
import Error from './components/Error';

import './styles/index.scss';
import './styles/reset.scss';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/informations' element={<Informations />} /> 
        <Route path='/parcours' element={<Parcours /> } />
        <Route path='/projets' element={<Projets />}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
