import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Item = ({product}) =>{

    return (
        <div>
            <Card className="text-center my-2">
                <Card.Header>{product.title} - {product.author}</Card.Header>
                <Card.Body>
                    <Card.Img className="w-25" variant="top" src={product.pictureUrl} alt={product.title} />
                    <Card.Text>${product.cost}</Card.Text>
                    <Link to="/item/:id"><Button><i class="bi bi-eye-fill"></i></Button></Link>
                </Card.Body>
                <Card.Footer className="text-muted">Stock: {product.stock}</Card.Footer>
            </Card>           
        </div>
    )
}

export default Item
