import React from 'react';
import './MenuItems.css'
import { Grid } from '@material-ui/core';

import { Link } from 'react-router-dom';




  



const MenuItems = (props) => {

    const {name, photoURL,price, description,id } = props.item;
 
    
    return (
       

        
        <Grid item xs={4}   className="item-box">
             <Link className="link" to={"/item/"+id}>
                 <div className='container' >
        
                 <div className="card">
    <img src={photoURL} alt="img"/>
    <h4>{name}</h4>
    <p style={{color:'gray'}}><small> {description} </small> </p>
    <h6>${price}</h6>
    
  </div>
  
    </div>
           
            
            </Link>
        </Grid>
       
        
    );
};

export default MenuItems;