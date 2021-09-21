import React from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.css';

const ItemListContainer = () => {
    return (
        <div className="container">
            <Catalogo text='Catálogo' />
            <div className="row">
                <Item className="col-sm" product="Papillon" cost={10} pic="https://covers.alibrate.com/b/59872eaecba2bce50c1f25f5/4bffcfc6-de0b-4dd9-b823-f67e573bafa4/medium" />
                <Item className="col-sm" product="Los tres mosqueteros" cost={15} pic="https://i.pinimg.com/474x/90/51/28/905128d0d5fc2a4740cbb3332bca5828--book-show-book-jacket.jpg" />
                <Item className="col-sm" product="La senda Jedi" cost={18} pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUxsoKTWjADFj-hCFTaWgUpwytQ8Xivj74hnEeYojx4PyKvcduRQ-WDsefJtESsTJ0mw2S6Fd&usqp=CAc" />
            </div>
        </div>
    ) 

}

const Catalogo = (props) => {
    const jsx = <h1>{props.text}</h1>;
    return jsx;
}

export default ItemListContainer