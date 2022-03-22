import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
// add to cart product
    const handleAddToCart= (product) =>{
        console.log(product);
        const newCart =[...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                {/* <h3>This is cart container</h3>
                <p>Add Product: {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;