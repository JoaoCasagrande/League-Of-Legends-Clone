import React from 'react';

import '../styles/global.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoadScreen from './LoadScreen';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/loading' element={ <LoadScreen /> } />
        <Route exact path='/home' element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
