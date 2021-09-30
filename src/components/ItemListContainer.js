import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.css';

const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    let productos = [
        {id: 0, title:"Papillon", author:'Henri Charriere', stock:10, cost:1500, pictureUrl:"https://covers.alibrate.com/b/59872eaecba2bce50c1f25f5/4bffcfc6-de0b-4dd9-b823-f67e573bafa4/medium"},
        {id: 1, title:"Los tres mosqueteros", author:'Alexandre Dumas', stock:2, cost:1000, pictureUrl:"https://i.pinimg.com/474x/90/51/28/905128d0d5fc2a4740cbb3332bca5828--book-show-book-jacket.jpg"},
        {id: 2, title:"The Jedi path", author:'Star Wars', stock:15, cost:1250, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUxsoKTWjADFj-hCFTaWgUpwytQ8Xivj74hnEeYojx4PyKvcduRQ-WDsefJtESsTJ0mw2S6Fd&usqp=CAc"},
        {id: 3, title:"Ciberdefensa", author:'Sol Gastaldi & Leandro Ocón', stock:19, cost:1100, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_669033-MLA45273339061_032021-O.webp"},
        {id: 4, title:"Operación masacre", author:'Rodolfo Walsh', stock:18, cost:800, pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDZ3czC9EF0i_aIHl7FDfIgxYjB5Ke-Tl9KvKCsJwxaYYFk4vHtYJMX7XVtCXXVr9H5W40wA2&usqp=CAc"}
    ];

    useEffect(() => {
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
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