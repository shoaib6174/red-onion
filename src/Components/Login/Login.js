import React, { useState } from 'react';
import Auth from './useAuth';
import "./Login.css"
import logo from "../../hot-onion-restaurent-resources-master/ICON/logo2.png"
import bg from "../../hot-onion-restaurent-resources-master/Image/loginBG.png"

import "firebase/auth";



const Login = () => {
    const auth = Auth();

    

    
    

   
    
    
    const [newuser, setnewUser] = useState({
        name:'',
        email: '',
        password:'',
        confirmPassword:'',
    })
    
    
    

    const handleChange =e=>{
        newuser[e.target.name]=e.target.value;
       
    }
    const [loginState, setLoginState]= useState("Already have an account?")
    const handleloginState =()=>{
        if(loginState==="Already have an account?"){
            setLoginState("Create a new account")
        }
        else if(loginState==="Create a new account"){
            setLoginState("Already have an account?")
        }
    }
    
    const createAccount = (event)=>{
        
        
        auth.signUp(newuser)
        
    event.preventDefault();

    }       
            
        
    

    const singInUser = (event)=>{

        auth.signIn(newuser)
        
        event.preventDefault();
    }




    return (
        <div className="logInForm">

<div className='login-container'>
                <img src={bg} alt=""/>
                <div className='centered'>
                    


                <img id='logo'  src={logo} alt=""/>
           { loginState==="Already have an account?"?
           
            <form onSubmit={createAccount}>
            <input type='text' onBlur={handleChange} name="name" placeholder="Your Name"  /><br/>
            <br/>
            <input type='text' onBlur={handleChange} name="email" placeholder="Your Email" required/> <br/>
           
            <br/>
            <input type='password' onBlur={handleChange} name="password" placeholder="Your Password" required /> <br/>
            
            <br/>
            <input type='password' onBlur={handleChange} name="confirmPassword" placeholder="Confirm Your Password" /><br/>
            <span className="error-msg">{auth.error}</span>
            <br/>
            <input type="submit" value= "Create Account"/>
            
            </form>
            
                    
            
            
            
            :
            
            <form onSubmit={singInUser}>
            <input type='text' onBlur={handleChange} name="email" placeholder="Your Email" />
            <br/>
            <input type='password' onBlur={handleChange} name="password" placeholder="Your Password" />
            <br/>
            
            <input type="submit" value= "Login"/>
            </form>
            }
            {<p className="smallText" ><small> {auth.error} </small></p>}
            <p className="smallText" onClick={handleloginState}><small> {loginState} </small></p>





                </div>
            </div>





            
    
            
        </div>
    );
};

export default Login;