import React from 'react';

import "./Header.css"
import logo from '../../hot-onion-restaurent-resources-master/ICON/logo.png'
import Auth  from '../Login/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const auth = Auth()
    const user= auth.user;
    console.log(user)

     
    
    return (
        <div>
            <div className="header">
            
        
                <nav>
                <Link to='/'><img className='h-img' src={logo} alt=""/></Link>
                
                    
                        {
                            user && <a href="/cart">Cart</a>
                        }
                        {
                            
                            user ?<a href="/login">{user.name} </a>  : <a href="/login"> Login</a>
                        }
                        {
                            user && <a href="/" onClick={()=>auth.signOut()} >SignOut</a>
                        }
                        
                        
                        
                    
                </nav>
            </div>
            
        </div>
    );
};

export default Header;