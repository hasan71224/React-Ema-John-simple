import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const{name, img, price, shipping, quantity} = props.product
    const{product, handleRemoveProduct}=props
    
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details' title={name}>
                    <p className='product-name'>{name.length>20 ? name.slice(0, 20)+"..." : name}</p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p>Shipping: <span className='orange-color'>{shipping}</span></p>
                </div>
                <div className='delete-container'>
                    <button onClick={()=>handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;