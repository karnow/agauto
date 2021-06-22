import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Omos from 'views/Omos';
import Reservedele from 'views/Reservedele';

function Root() {
  return (
    <>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservedele' element={<Reservedele />} />
            <Route path='/omos' element={<Omos />} />
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
}

export default Root;
