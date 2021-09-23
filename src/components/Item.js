import React from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

const Item = (props) => {
    const {product, cost, pic, stock} = props;

    return (
        <div>
            <Card className="text-center">
                <Card.Header>{product}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={pic} alt={product} />
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    $ {cost}
                    </Card.Text>
                    <ItemCount stock={stock} initial={0}/>
                </Card.Body>
                <Card.Footer className="text-muted">Stock: {stock}</Card.Footer>
            </Card>           
        </div>
    )
}

export default Item
