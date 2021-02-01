import React/*, {Component}*/ from 'react';

const Header = (props) =>{
    //const titulo = 'Nuestra Tienda Virtual';
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Header;