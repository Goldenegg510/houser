import React from 'react';
import './App.css';
import {HashRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Routes from './Routes'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      {Routes}
    </div>
    </HashRouter>
  );
}

export default App;
