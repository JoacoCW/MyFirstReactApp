import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import 'bootstrap/dist/css/bootstrap.css';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import {firestore} from "../../firebase/index";

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    const { id: idCategory } = useParams();
    console.log(idCategory);
    
    useEffect(() => {

        const db = firestore

        const coleccion = db.collection("libros")
        if (idCategory === undefined ) {
            const consulta = coleccion.get()
            consulta.then((resultado) => {
                const ArrayProductos = []
                resultado.docs.forEach(producto => {
                    const producto_final = {
                        id: producto.id,
                        ...producto.data()
                    }
                    ArrayProductos.push(producto_final)
                })
                console.log(ArrayProductos);
                setProducts(ArrayProductos)
            })
        } else {
            const consulta = coleccion.where('categoria', '==', idCategory).get()
            consulta.then((resultado) => {
                const ArrayProductos = []
                resultado.docs.forEach(producto => {
                    const producto_final = {
                        id: producto.id,
                        ...producto.data()
                    }
                    ArrayProductos.push(producto_final)
                })
                console.log(ArrayProductos);
                setProducts(ArrayProductos)
            })
        }
    }, [idCategory])
    

    return (
        <div className="container">
            <h1 className="m-4">Libros</h1>
            <ul className="grilla">
                <ItemList product={products} />
            </ul>
        </div>
    ) 

}

export default ItemListContainer 
