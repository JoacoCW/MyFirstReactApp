// import React, { useEffect, useState } from 'react';
// import { getFirestore } from './firebase';

// const App = () => {
//     const [loading, setLoading] = useState(false);
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//       setLoading(true);
//       //inicializar la conexion con firebase u conectarme
//       //a firestore
//       const db = getFirestore();
//       //Vamos a ir a la coleccion que yo quiero
//       const itemCollection = db.collection("libros");
//       //Vamos a buscar la informacion
//       itemCollection.get().then((querySnapshot) => {
//         if(querySnapshot.size === 0) {
//           console.log('No Hay resultados');
//         }
//         console.log(querySnapshot.docs);
//         setItems(querySnapshot.docs.map(doc => doc.data()));
//       }).catch((error) => {
//         console.log("Error al traer los items", error);
//       }).finally(() => {
//         setLoading(false);
//       })
//     }, []);
//     return (
//     <>
//       <div>{loading && <p>Cargando Informacion...</p>}</div>
//       {!loading && items.map(item => {
//         return(
//         <ul key={item.id}>
//           <li key={item.id}>{item.id}</li>
//           <li key={item.description}>{item.description}</li>
//           <li key={item.image}><img src={item.image}></img></li>
//           <li key={item.price}>{item.price}</li>
//           <li key={item.stock}>{item.stock}</li>
//           <li key={item.title}>{item.title}</li>
//           <li key={item.author}>{item.author}</li>
//           <li key={item.categoria}>{item.categoria}</li>
//         </ul>
//         )
//       })
//       }
//     </>
//   )}
// export default App;




import './App.css';
import 'bootstrap';
import AppRoutes from "./Routes/AppRoutes";
import {ProviderCustomizado} from "./components/CartContext";

const App = () => {

  return (

        <ProviderCustomizado>
            <AppRoutes/>
        </ProviderCustomizado>
    );
}

export default App;
