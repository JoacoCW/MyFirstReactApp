import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.css';
import libros from './data/libros.json'

const ItemListContainer = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(libros);
            }, 2000);
        })
        promise.then(response =>
            (setProducts(response)
        )).catch(error => {
            console.error('Error', error);
        });
    }, []);
    console.log(products);
    

    return (
        <div className="container">
            <Catalogo text='Catálogo' />
            <ItemList product={products} />
        </div>
    ) 

}

const Catalogo = (props) => {
    const jsx = <h1>{props.text}</h1>;
    return jsx;
}

export default ItemListContainer