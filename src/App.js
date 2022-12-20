import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Body/>}/>
      </Routes>
    </div>
  );
}

export default App;
