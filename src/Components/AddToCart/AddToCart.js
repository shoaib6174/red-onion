import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';


const AddToCart = (props) => {
    
    let [quantity, setQuantity]= useState(0);
   let [q , setQ] = useState(null);
    let[qu, setQu]= useState(0);

    const [cart, setCart] = useState([]);
    const location =useLocation()

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
        console.log(savedCart, productKeys)
        if(products){
            const previousCart = productKeys.map( existingKey => {
                const product = products.find( pd => pd.id === existingKey);
                product.quantity = savedCart[existingKey];
                return product;
            } )
            setCart(previousCart);
        }
        
        
    }, [products])
useEffect(()=>{
    let i = cart.find(i=>i.id===props.item.id)
    i && q===null && setQuantity(i.quantity);
   // quantity===null && setQuantity(q); 

    quant()
},[cart])
    
    

    const handleMinus=(product)=>{
         if(quantity>0){
           setQuantity(quantity-1)
            //handleAddProduct(product)
         }
    }
    const handlePlus=(product)=>{
      
       //  handleAddProduct(product)
      setQuantity(quantity+1);
      
        
    }

    const update = props.update
   
    
    
    
    const handleAddProduct = (product) =>{
        

        location.pathname==='/cart' && update()

        if(quantity>0){

        
        const toBeAddedId = product.id;
        
        const sameProduct = cart.find(pd => pd.id === toBeAddedId);
        
        let count = quantity;
        let newCart;
        if(sameProduct){
            
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.id !== toBeAddedId);

            newCart = [...others, sameProduct];
           
            setCart(newCart);
            addToDatabaseCart(product.id, count);
        }
        else{
            product.quantity = count;
            newCart = [...cart, product];
            setCart(newCart);
            addToDatabaseCart(product.id, count);
        }
    }
    else {
        removeFromDatabaseCart(product.id)
    }
    if(location.pathname==='/cart'){
        window.location.href = '/cart'
        
    }
    else{
       window.location.href = '/'
    }

    }
  const quant=()=>{
        const q = cart.find(i=>i.id===props.item.id)
        if(q){
            setQu(q.quantity)
        }
    }

    

    

    return (
        <div style={{display: 'inline-block'}}>
            <button onClick={()=>handleMinus(props.item)}> -</button>
            <span>  {quantity}  </span>
            <button onClick={()=>handlePlus(props.item)}>+</button>
            <br/>
            
            <button style={{backgroundColor:'rgb(249, 25, 68)'}} onClick={()=>handleAddProduct(props.item)}>add</button>
            <br/>
            <br/>
            
            
        </div>
    );
    
};

export default AddToCart;