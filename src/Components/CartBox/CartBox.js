import './CartBox.css'
import React, { useState, useEffect } from 'react';

import {  getDatabaseCart } from '../../utilities/databaseManager';
import AddToCart from '../AddToCart/AddToCart';





const CartBox = () => {

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
        
         
        update()
        
    }, [cart])
  
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
            
           return newTotalPrice = newTotalPrice + item.quantity* item.price;
        
    })
    setTotalPrice(newTotalPrice);
    }
    
  

    const quantityUpdate=()=>{
        let newTotalQuantity=0;
        cart.map(item=>{
            
            return newTotalQuantity = newTotalQuantity + item.quantity;
        
    })
    setTotalQuantity(newTotalQuantity);
    }
     
    const update =()=>{
        quantityUpdate();
        priceUpdate()
        quantityUpdate()
    }
    


    

    return (
        
        
            <div className="cart-box">
                    <div className="cart-box-header">
                            <p>From:<strong>Gulashan</strong> </p>
                            <p>Arriving in 20-30 min</p>
                            <p>to <strong></strong></p>
                    </div>
                    <div className="cart-item-details">
                            {
                                cart.map(item=>
                                    <div className="items">
                                        <div className="item-img">
                                            <img src={item.photoURL} alt=""/>
                                            
                                        </div>
                                        <div className="item-info">
                                            <h5> {item.name} </h5>
                                            <h3 style={{color:'	rgb(249, 25, 68)'}}>${item.price}</h3>
                                            <p className="small-text">Delivery Free</p>
                                        </div>
                                        <div className="item-change">
                                                
                                                 
                                                <AddToCart update={()=>update()} item={item}></AddToCart>
                                                
                                        </div>
                                    </div>)
                            }
                    </div> 
                    <div className="bill">
                        <div style={{borderBottom:"1px solid gray"}}>
                            <p>SubTotal:({totalQuantity})<p className="r">{totalPrice}</p></p>
                            <p>tax: <p className="r">{.15*totalPrice}</p></p>
                            <p>Delivery fee: <p  className="r">0</p> </p>
                            
                        </div>
                            <p>Total: <p className="r">{totalPrice*1.15}</p> </p> 
                        </div>
                    <div>
                        
                    </div>
                        

            </div>
        
    );
};

export default CartBox;