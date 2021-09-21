import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
    const {product, cost, pic} = props;

    return (
        <div>
            <h2>{product}</h2>
            <h4>$ {cost}</h4>
            <img src={pic} alt=''/>
            <ItemCount stock={10} initial={0}/>
        </div>
    )
}

export default Item
