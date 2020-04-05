import './Cart.css'
import React, { useState} from 'react';

import CartBox from '../CartBox/CartBox';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useAuth } from '../Login/useAuth';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useEffect } from 'react';
import Review from '../Review/Review';

const Cart = () => {
    
    const [isProceed, setIsProceed]= useState(false)
    const [address, setAddress]=useState([])
    const [isPaytime, setIsPaytime] = useState(false)
    const [isDelivery, setIsDelivery] = useState(false)
    const [isShowCart, setIsShowCart] = useState(true)

    const [orderId, setOrderID] = useState(null)
    const auth = useAuth()
    const stripePromise = loadStripe('pk_test_hMsb3Ebw9yxBqRP1pR9GpOmG00DJ837Uiy');
    

    const handleChange=event =>{ 
       
        const add ={}
         add[event.target.name] = event.target.value
        const newAdd =[...address, add] 
        setAddress(newAdd)
      
    }

   useEffect(()=>{
    auth.setOId(orderId)

   },[orderId])


    const handleProceed=(event)=>{
        
        event.preventDefault()
        
        setIsProceed(true)    
        setIsShowCart(false)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setIsPaytime(true)
        
        
    }



    const handlePayment=(event)=>{
        
         window.location.href= '/review'
        
    }


    const handlePlaceOrder = payment => {
        
        
        const savedCart = getDatabaseCart();
        console.log('.........',savedCart)
        const orderDetails = {
            email: auth.user.email,
            cart: savedCart,
            shipmentDetails: address,
            payment: payment

        }
        fetch('https://cryptic-cove-49419.herokuapp.com/placeorder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(order => {
                setOrderID(order._id)
                processOrder();
                setIsPaytime(false)
                setIsProceed(false)
                setIsDelivery(true)
            })
    }







    return (
        <div className= "cart">
            
             
            <div style={{display: (isProceed && !isPaytime && !isDelivery) ? 'block' : 'none' }} className="addressForm">
            <form onSubmit={handleSubmit }>
            <input type='text' onBlur={handleChange} name="deliveryType" placeholder="Delivery Type" required/>
            <br/>
            <input type='text' onBlur={handleChange} name="houseAndRoad" placeholder="House no And Road no" required/>
            <br/>
            <input type='text' onBlur={handleChange} name="flatNo" placeholder="Flat or Floor" required/>
            <br/>
            <input type='text' onBlur={handleChange} name="Area" placeholder="Area" required/>
            <br/>
            <input type='text' onBlur={handleChange} name="deliveryInstruction" placeholder="Delivery Instruction" required/>
            <br/>
            
            <input style={{backgroundColor:"rgb(249, 25, 68)"}} className="save-button" type="submit" value= "Save and Continue"/>
            </form>
            </div>
            
            <div style={{display: (isShowCart) ? 'block' : 'none'   }} className="cartItems">
                        <div>
                        <CartBox></CartBox>
                        </div>
                        
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button className='save-button' onClick={handleProceed }>Place Order</button>
                        
                            
            </div>
            <div style={{display: isPaytime ? 'block' : 'none' }} className='paymentBox'>
            <h1>Payment Information</h1>
                <Elements stripe={stripePromise}>
    <CheckoutForm handlePlaceOrder={handlePlaceOrder} ></CheckoutForm>
  </Elements>
            </div>
        <div style={{display: isDelivery ? 'block' : 'none' }}>
            <Review orderId={orderId}>

            </Review>
        </div>



        </div>
    );
};

export default Cart;