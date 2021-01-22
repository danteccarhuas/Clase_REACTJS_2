import React from 'react';
import ReactDOM from 'react-dom';
//import '.css/index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//Importando Primer Componente Creado
import Aplicacion from './componentes/Aplicacion';

//React SIN JSX

// const titulo = React.createElement(
//   'h1',
//   {id: 'titulo', className: 'encabezado'},
//   'Hola Mundo'
// )

{/* <React.StrictMode>
<App />
</React.StrictMode> */}
ReactDOM.render(
<Aplicacion />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
