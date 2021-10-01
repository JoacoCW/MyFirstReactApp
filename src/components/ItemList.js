import React from 'react';
import Item from './Item';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Row from 'react-bootstrap/Row';*/

const ItemList = ({product}) =>{
    
    console.log(product);
    
    return(
        <div>
            {product.length ? (
                product.map((product) => <Item product={product} />)
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </div>
    )
}

export default ItemList
