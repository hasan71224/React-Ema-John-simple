import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
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

    // call from fakedb
    useEffect(()=>{
        const storedCard = getStoredCard();
        const saveCard=[];
        for(const id in storedCard){
            const addedProduct = products.find(product =>product.id === id);
            if(addedProduct){
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct);
            }
        }
        setCart(saveCard);
    },[products])

// add to cart product (event handler)
    const handleAddToCart= (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        // add local storage
        addToDb(selectedProduct.id)
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