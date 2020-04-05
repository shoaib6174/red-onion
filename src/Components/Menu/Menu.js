import React, { useState } from 'react';

import './Menu.css'
import MenuItems from '../MenuItems/MenuItems';
import { Grid } from '@material-ui/core';
import CheckOut from '../CheckOut/CheckOut';
import { useEffect } from 'react';









const Menu = () => {
    const [bcolor,setbColor]= useState('black')
    const [lcolor,setlColor]= useState('red')
    const [dcolor,setdColor]= useState('black')
    const [category, setCategory] = useState('lunch')
    const [products, setProducts]= useState(null)
    const [items, setItems] = useState(null) 


    useEffect(()=>{
        fetch('https://cryptic-cove-49419.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    useEffect(()=>{
        let i 
        if(products){
             i = products.filter(food=>food.catrgory===category)
        } 
        
        setItems(i)
    
    },[products,category])


    const handleCategory = (category) => {
        setCategory(category);
        if (category==='breakfast'){
            setbColor('red');
            setlColor('black');
            setdColor('black');
        }
        else if (category==='lunch'){
            setlColor('red');
            setdColor('black');
            setbColor('black');
        }
        else if (category==='dinner'){
            setdColor('red');
            setlColor('black');
            setbColor('black');
        }
}
 

 

    return (
        <div className='menu'>
            
            <div className="menu-types">
                
                <span style={{color:bcolor}} onClick={()=>handleCategory('breakfast')}>Breakfast         </span>
                <span style={{color:lcolor}}  onClick={()=>handleCategory('lunch')} >Lunch         </span>
                <span style={{color:dcolor}} onClick={()=>handleCategory('dinner')}>Dinner</span>
            </div>
            <div className="menu-container">
                <Grid container>
                    {
                        items && items.map(item=>  <MenuItems key={item.id} item={item}></MenuItems> )
                    }
                </Grid>
                
                    
                   
            </div>
            {
                    <CheckOut></CheckOut>
                }
                
           
        </div>
    );
};

export default Menu;