import React, { useEffect, useState } from "react";
import Data from "./json/JSONProductos.json";
import ItemDetail from "./ItemDetail";
// en este caso la lista la tenemos guardada en un json (se llama "Data")
const ItemDetailContainer = () => {
    const [itemDetail,setItemsDetail] = useState([])
    useEffect(() => {
        setTimeout(() => {
            Promise
                .resolve(Data)
                .then(response => {
                    setItemsDetail(response)
                })
        }, 1000)
    }, [])
    return (
        <div>
            <p>Detalle Item</p>
            <ItemDetail itemDetail={itemDetail}/>
        </div>
    );
}
export default ItemDetailContainer;