import { useEffect, useState } from "react"
import { getStoredCard } from "../utilities/fakedb"

const useCard=(products)=>{
    const [cart, setCart]=useState([])
    useEffect(()=>{
        const storedCard = getStoredCard();
        const savedCard=[];
        for (const id in storedCard){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct)
            }
        }
        setCart(savedCard)
    },[products])
    return [cart, setCart]
}
export default useCard