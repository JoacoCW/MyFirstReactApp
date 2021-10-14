import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {firestore} from "../firebase/index";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {

        //Tengo una referencia de la db
        const db = firestore

        //.get() .where().get() .doc() .add()

        //Obtengo la coleccion de productos
        const coleccion = db.collection("libros")
        const consulta = coleccion.get()

        consulta.then((resultado) => {
            console.log(resultado.docs)
            resultado.docs.forEach(product => {
                const producto_final = {
                    id: product.id,
                    ...product.data()
                }
                if (producto_final.id === id){
                    setProduct(producto_final)
                }

                console.log(product)
            })
            
        })



    }, [id])

    return <ItemDetail product={product}/>;
}

export default ItemDetailContainer;
