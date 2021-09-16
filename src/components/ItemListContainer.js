import React from 'react'

const ItemListContainer = () => {
    return <Catalogo text='Acá va el catálogo' />
}

const Catalogo = (props) => {
    const jsx = <h1>{props.text}</h1>;
    return jsx;
}

export default ItemListContainer