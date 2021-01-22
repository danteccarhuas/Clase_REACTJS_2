import React, {Component} from 'react';

class Producto extends Component{
    render(){
        console.log(this.props);
        const {nombre, precio} = this.props.producto;
        return (
            <div>
                <h2>{nombre}</h2>
                <h2>Precio: $ {precio}</h2>
            </div>
        )
    }
}
export default Producto;