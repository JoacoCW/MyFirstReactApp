import React from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Row from 'react-bootstrap/Row';*/

const ItemList = ({product}) =>{
    
    console.log(product);
    
    return(
        <div>
            {
                product && product.map((product) => <Item product={product}/>)
            }
        </div>
    )
}

export default ItemList
