import {createContext, useState} from "react";
export const CartContext = createContext()
const {Provider} = CartContext

export const ProviderCustomizado = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const valorDelContexto = {
        carrito,
        setCarrito,
        contador,
        setContador,
        show, 
        setShow,
        handleClose,
        handleShow
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default CartContext