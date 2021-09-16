import React from 'react'

const CartWidget = (props) => {
    return (
        <p>
            <i class="bi bi-cart2 mh-100 text-white"> {props.number}</i>
        </p>
    )
}

export default CartWidget
