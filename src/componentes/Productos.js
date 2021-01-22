//Pasos para crear un componente en React

//1. Importar el namespace react
import React, {Component} from 'react';
import Producto from './Producto';
//2. Crear la clase
class Productos extends Component{
//3. Invocar function render(es obligatorio ya que contiene el 
//codigo que se va a mostrar en este componente)
    render(){
        return (
            <div>
                <h2>Listado de Productos</h2>
                {
                    Object.keys(this.props.productos).map(key=>(
                        <Producto
                            key={key}
                            producto={this.props.productos[key]}
                        />
                    ))
                }
            </div>
        )
    }
}
//3. Exportar el Componente
export default Productos;