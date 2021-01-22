import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const empleado = {
    nombre: 'Juan',
    trabajo: 'Desarrollador Web'
  }
  return (
    <div className="contenedor">
      <h1 className="mayusculas">Detalles de: </h1>
      <p>Nombre: {empleado.nombre}</p>
      <p>Trabajo: {empleado.trabajo}</p>
    </div>

    //React.createElement(
      // 'div',
      // null,
      // React.createElement(
      //   'input',
      //   {type:"text",value:'Value para el Input'}
      // )
      // 'h1',
      // {id: 'titulo', className: 'encabezado'},
      // 'Hola Mundo'
    //)

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
