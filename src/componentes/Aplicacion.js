//Pasos para crear un componente en React

//1. Importar el namespace react
import React, {Component} from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';
//2. Crear la clase
class Aplicacion extends Component{


    //Primera forma de usar el state
    // constructor(props){
    //     super();
    //     this.state = {
    //         productos  : [
    //             {nombre: 'Libro', precio:200},
    //             {nombre: 'Disco de Música', precio:100},
    //             {nombre: 'Instrumento Musical', precio:800},
    //             {nombre: 'Reporductor Musical', precio:1500},
    //             {nombre: 'Album Ed- Especial', precio:200}
    //         ]
    //     }
    // }

    //antes setear una propiedad del state es necesario inicializar la propiedad en el state
    //Segunda forma de usar el state
    state = {
        productos  : [
            // {nombre: 'Libro', precio:200},
            // {nombre: 'Disco de Música', precio:100},
            // {nombre: 'Instrumento Musical', precio:800},
            // {nombre: 'Reporductor Musical', precio:1500},
            // {nombre: 'Album Ed- Especial', precio:200}
        ]
    }

    //Se ejecuta cuando el componente carga
    //Cuando se haga consulta a un api usar el componentDidMount
    //setState es para setear una propiedad en el state
    componentDidMount(){
        //Vairable con productos

        const productos = [
            {nombre: 'Libro', precio:200},
            {nombre: 'Disco de Música', precio:100},
            {nombre: 'Instrumento Musical', precio:800},
            {nombre: 'Reporductor Musical', precio:1500},
            {nombre: 'Album Ed- Especial', precio:200}
        ]
        setTimeout(()=>{
            this.setState({
                productos: productos
            });
        },3000);
        console.log('YAAA!!'); 
    }

//3. Invocar function render(es obligatorio ya que contiene el 
//codigo que se va a mostrar en este componente)
    render(){
        /*const productos = [
        ]*/

        return (
            <div>
                <Header 
                    titulo="Nuestra Tienda Virtual"
                />
                <Productos 
                productos={this.state.productos}
                />
                <Footer />
            </div>
        )
    }
}
//3. Exportar el Componente
export default Aplicacion;