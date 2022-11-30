import './App.css';
import Login from "./components/login"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Game from './components/game';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;