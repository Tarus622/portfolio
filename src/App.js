import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Header/>}/>
      </Routes>
    </div>
  );
}

export default App;
