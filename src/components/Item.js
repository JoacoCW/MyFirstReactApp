import React from 'react'
import ItemCount from './ItemCount'
import { Card } from 'react-bootstrap';

const Item = (props) => {
    const {title, author, cost, pictureUrl, stock} = props;

    return (
        <div>
            <Card className="text-center my-2">
                <Card.Header>{title} - {author}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={pictureUrl} alt={title} />
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
