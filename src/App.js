import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import Details from './Components/Details/Details';
import { AuthContextProvider } from './Components/Login/useAuth';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import HeaderBg from './Components/Header/HeaderBg/HeaderBg';

import Review from './Components/Review/Review';
import LoadData from './Components/LoadData/LoadData';



function App() {

  return (
    <div className="App">
      <AuthContextProvider>
          <Router>
            <Switch>
              <Route exact path="/">
              <Header></Header>
              <HeaderBg></HeaderBg>
                <Menu></Menu>
              </Route>
              <Route path="/item/:id">
              <Header></Header>
                  <Details></Details>
              </Route>
              <Route path="/login">
              <Header></Header>
                <Login></Login>
              </Route>
              <Route path="/cart">
              <Header></Header>
                <Cart></Cart>
              </Route>
              <Route path="/review">
              <Header></Header>
              <Review></Review>
              </Route>
              <Route path="/loadData">
              <LoadData></LoadData>
              </Route>
              

            </Switch>
          </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
