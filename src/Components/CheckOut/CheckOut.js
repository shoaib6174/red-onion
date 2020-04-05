import React, { useState, useEffect } from 'react';

import Auth from '../Login/useAuth';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import './Checkout.css'

const CheckOut = () => {
    
    const auth = Auth()
    const user= auth.user;
    const [cart, setCart] = useState([]);

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
    
    
   
    const handleCheckout=()=>{
        if(user){
                return <Link to="/cart"><button className='checkout-button' style={{backgroundColor:'rgb(249, 25, 68)'}}>Proceed CheckOut</button></Link>
        }
        else{
            return <Link to="/login"><button className='checkout-button'  style={{backgroundColor:"yellow"}} >Proceed CheckOut</button></Link>
        }
    }


    return (
        <div >
            {
                cart.length>0?
                handleCheckout()
                : <button className='checkout-button'>Proceed CheckOut  </button>
            }
            
        </div>
    );
};

export default CheckOut;
