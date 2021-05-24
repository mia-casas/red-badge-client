import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from "./Components/Home";
import {IUserProps} from './Components/Interfaces'


function App() {

  
  return (
    <div className="App">
      <h1 className='title'>Discover</h1>
      <Router><Home /></Router>
    </div>
  );
}

export default App;
