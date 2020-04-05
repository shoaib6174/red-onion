import React from 'react';
import foodData from '../../fakeData'
const LoadData = () => {


    const addItems=()=>{
//post
fetch('https://cryptic-cove-49419.herokuapp.com/addProduct', {
    method:'POST',
    body:JSON.stringify(foodData),
    headers: {
       "Content-type": "application/json; charset=UTF-8"
    }
})
.then(res => res.json())
.then(data => {
    console.log('data',data);
    
    //clean
    

    //show success message
   

})
    }

    




    return (
        <div>
            <button onClick={addItems}> add</button>
        </div>
    );
};

export default LoadData;