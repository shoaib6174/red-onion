
import React, { useState, useEffect } from 'react';

import {  getDatabaseCart } from '../../utilities/databaseManager';



const Payment = () => {
    
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice]= useState(0);
    const [totalQuantity, setTotalQuantity]= useState(0);
    
   
    
  
    const [products, setProducts]= useState(null)
    


    useEffect(()=>{
        fetch('https://cryptic-cove-49419.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])


    
    useEffect(()=>{
        

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if(products){
            const previousCart = productKeys.map( existingKey => {
                const product = products.find( pd => pd.id === existingKey);
                product.quantity = savedCart[existingKey];
                return product;
            } )
            setCart(previousCart);
        }
        
        
    }, [products])
    
    const priceUpdate=()=>{
        let newTotalPrice=0
        cart.map(item=>{
            
            newTotalPrice = newTotalPrice + item.quantity* item.price;
        
    })
    setTotalPrice(newTotalPrice);
    }
    
  

    const quantityUpdate=()=>{
        let newTotalQuantity=0;
        cart.map(item=>{
            
            newTotalQuantity = newTotalQuantity + item.quantity;
        
    })
    setTotalQuantity(newTotalQuantity);
    }
     
    useEffect(()=>quantityUpdate(),[cart])
    console.log("pp",totalPrice, totalQuantity);
    return(
            <div>
                <p>hi{totalPrice}  {totalQuantity}</p>
            </div>
    );

};

export default Payment;