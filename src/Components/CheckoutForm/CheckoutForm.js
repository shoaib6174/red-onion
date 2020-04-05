import React from 'react';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError]= useState(null);
  const [cardDetails, setCardDetails]=useState(null);




  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
        setCardError(error.message);
        setCardDetails(null);
    }
    else{
        setCardError(null);
        const payment = {id: paymentMethod.id, last4: paymentMethod.card.last4 }
        console.log(payment, props.handlePlaceOrder )
        props.handlePlaceOrder(payment)
        setCardDetails(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          cardError && <p style={{color:'red'}}> {cardError} </p>
      }
      {
          cardDetails && <p style={{color:'green'}}>Payment Successful </p>
      }
    </form>
  );
};

export default CheckoutForm;