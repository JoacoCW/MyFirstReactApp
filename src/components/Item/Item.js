import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) =>{

    return (
        <Fragment>
            <div className="card m-4">
                <img src={product.image} className="card-img-top" alt={product.title} style={{width: "18rem", height: "24rem"}} />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.title} <hr/> {product.author}
                    </h5>
                    <li className="list-group-item m-4">Stock: {product.stock}</li>
                    <li className="list-group-item m-4">$ {product.price}</li>
                    <Link to={`/item/${product.id}`} className="btn btn-primary">
                        Ver más
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Item
