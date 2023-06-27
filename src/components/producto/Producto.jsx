import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo los valores
    const {id, articulo, precio} = producto;

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        //console.log("Seleccionar")
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([...changuito, producto]);
        console.log(changuito)
    }
    
    const eliminarProducto = (id) => {
        const nuevoProducto = productos.filter( producto => producto.id !== id);
        agregarProducto(nuevoProducto)
    }

   


    return (  
        <>
            {
            productos
            ?
            <Card style={{ width: '18rem', display:"inline-block",margin:'0.2em'}} >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{producto.articulo}</Card.Title>
                    <Card.Text>
                        ${producto.precio}
                    </Card.Text>
                    {
                    productos
                    ?
                    <button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                    >Añadir</button>
                    :
                    <button
                    type="button"
                    onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>}
                </Card.Body>
            </Card>
            :
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{producto.articulo}</Card.Title>
                    <Card.Text>
                        ${producto.precio}
                    </Card.Text>
                    {
                    productos
                    ?
                    <button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                    >Añadir</button>
                    :
                    <button
                    type="button"
                    onClick={ () => eliminarProducto(id) }
                    >Eliminar</button>}
                </Card.Body>
            </Card>

            }
            
        </>
    );
}
 
export default Producto;