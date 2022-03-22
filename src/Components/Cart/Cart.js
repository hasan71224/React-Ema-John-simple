import React from 'react';

const Cart = (props) => {
    const {cart} = props
    return (
        <div>
            <h3>This is cart container</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;