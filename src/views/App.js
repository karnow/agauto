import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Omos from 'views/Omos';
import Reservedele from 'views/Reservedele';
import Bilsalg from 'views/Bilsalg';
import Bilkob from 'views/Bilkob';
import Eksport from 'views/Eksport';
import ReservImg from './ReservImg';

function App() {
  return (
    <>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservedele' element={<Reservedele />} />
            <Route path='/bilsalg' element={<Bilsalg />} />
            <Route path='/bilkob' element={<Bilkob />} />
            <Route path='/eksport' element={<Eksport />} />
            <Route path='/omos' element={<Omos />} />
            <Route path='/reservedele/:id' element={<ReservImg />} />
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
}

export default App;
