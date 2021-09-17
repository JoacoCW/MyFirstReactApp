import React from 'react'

const CartWidget = (props) => {
    const {number} = props;
    return (
        <p>
            <i class="bi bi-cart2 mh-100 text-white"> {number}</i>
        </p>
    )
}


export default CartWidget
