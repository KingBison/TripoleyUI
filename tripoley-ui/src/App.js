import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Login from './components/Login';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;