import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Omos from 'views/Omos';

function Root() {
  return (
    <>
      <Router>
        <MainTemplate>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/note/:noteId' element={<DetailsPage />} /> */}
            <Route path='/omos' element={<Omos />} />
            {/* <Route path='/article/:articleId' element={<DetailsPage />} /> */}
            {/* <Route path='/twitters' element={<Twitters />} /> */}
            {/* <Route path='/twitter/:twitterId' element={<DetailsPage />} /> */}
          </Routes>
        </MainTemplate>
      </Router>
    </>
  );
}

export default Root;
