import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route, Redirect } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) =>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

 export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  } 
  const getUser = user => {
    const {displayName, email, photoURL} = user;
    return {name: displayName, email, photo: photoURL}; 
}
  

const Auth = () => {
    const [user, setUser] = useState(null) ;
    const[error,setError] = useState('')
    const [oId, setOId] = useState(null)

    
    
     
      const signUp= newuser=>{
        firebase.auth().createUserWithEmailAndPassword(newuser.email, newuser.password).then(res=>{
          
          const guser = firebase.auth().currentUser;

          guser.updateProfile({
          displayName: newuser.name
          })
          const singedInUser = getUser(res.user);
          setUser(singedInUser);
          setError('')
          window.location.pathname = '/';
          return res.user;
        })
        .catch(err=>{
          setError(err.message)
        })
      }
      const signIn=newuser=>{
        firebase.auth().signInWithEmailAndPassword(newuser.email, newuser.password).then(res=>{
          
          console.log('userrrrrrr',res,'lllll')
          const singedInUser = getUser(res.user);
          setUser(singedInUser);
          setError('')
          window.location.pathname = '/';
          return res.user;
          
        })
        .catch(err=>{
          setError(err.message)
        })

      }

    const signOut = () => {
        return firebase.auth().signOut().then(function() {
            setUser(null);
            window.location.pathname = '/';
            return true;
          }).catch(function(error) {
            console.log(error);
            return false;
          });
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              const singedInUser = getUser(usr);
              
              setUser(singedInUser);
              
                
            } else {
              // No user is signed in.
            }
          });
    } , [])


    return {
        user,
        error,
        signOut,
       getUser,
       signIn,
       signUp,
       setOId,
       oId
       
    }
}

export default Auth;