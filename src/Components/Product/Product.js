import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name, img, seller, price, ratings}=props.product
    const {product, handleAddToCart}= props

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p> <small>Manufacturer: {seller}</small> </p>
                <p> <small>Rating: {ratings} stars</small> </p>
            </div>
            <button onClick={()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-p'>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;