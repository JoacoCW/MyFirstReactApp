import React from 'react'
import { useContext } from 'react';
import './CartWidget.css'
import {Link} from "react-router-dom";
import {ItemContext} from "../ItemContext";
import { CartCheckFill } from 'react-bootstrap-icons';

function CartWidget(props) {

    const {contador} = useContext(ItemContext);

    return (
        <div  style={{visibility: contador === 0 ? "hidden" : "visible",}} className={'d-flex align-items-center'}>
            <li>
                <Link to={'Cart'} className="cartIcon"><CartCheckFill /></Link>
            </li>
            <span style={{color: "white"}}>
                {contador}
            </span>

        </div>
    );
}

export default CartWidget;
