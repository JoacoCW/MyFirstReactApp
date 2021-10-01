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
            <ItemList product={products} />
        </div>
    ) 

}

export default ItemListContainer