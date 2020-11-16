import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';
import { Button } from '@material-ui/core';
import MiValidador from './MiValidador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Ejemplo - Clase N° 1 react</p>
        <p>Ingrese Rut</p>
      <MiValidador valor = ""/>
      <p>
      <NewComponent />
      </p>
      </header>
    </div>
  );
}

export default App;
