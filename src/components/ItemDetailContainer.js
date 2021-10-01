import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
/*import libros from './data/libros.json'*/

const libroX = { id: 6, title: "Gandhi autobiografía", author: "Mahatma Gandhi", stock: 10 , cost: 1300, description: "Lorem Ipsum",  pictureUrl : "https://m.media-amazon.com/images/I/71Mb2yBsBWL._AC_UL320_.jpg", categoria: "Biografía" }


const ItemDetailContainer = () => {

    const [item, setItem] = useState(false)



    useEffect(() => {

        setTimeout(() => {
            Promise
                .resolve(libroX)
                .then(response => {
                    setItem(response)
                })
        }, 2000)

    }, [])

    return (
        <div>
            <p>Detalle Item</p>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;
