import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Joaquín Weiss
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Componente />
    </div>
  );
}


export default App;
