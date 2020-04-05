import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import AddToCart from '../AddToCart/AddToCart';
const Details = (props) => {
    const {id}= useParams();
    

    const [item , setItem]= useState(null)
    useEffect(() => {
        fetch('https://cryptic-cove-49419.herokuapp.com/product/'+id)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setItem(data)
        })
    }, [id]);



    return (
        <div className='details'>
            {
                item && <div>

                
            
            
            <div className="info">
                <h1>{ item.name}</h1>
                <p>{ item.details}</p>
                <h3>${  item.price}</h3>
                 <AddToCart item={item}></AddToCart>
            </div>
            <div className="details-img">
                <img src={ item.photoURL} alt=""/>
            </div>
            </div>
            }    
        </div>
    );
};

export default Details;