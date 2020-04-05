import React from 'react';
import map from "../../hot-onion-restaurent-resources-master/Image/map.png"
import bike from"../../hot-onion-restaurent-resources-master/Image/Group 1151.png"
import './Review.css'
import Auth from '../Login/useAuth';
const Review = (props) => {
    const auth = Auth()
    console.log(auth.oId)
    console.log(props)
    return (
        <div className="review">
            <div className="map">
            <h3>Thank you for shopping from us</h3>
              <p>Your order Id:  {props.orderId} </p>
                <img id= 'map' src={map} alt=""/>
            </div>
            <div className="address" >
                <h1>{auth.oId}</h1>
                <img id="bike" src={bike} alt=""/>
                <div className="review-box">
                    <p>Red Onion's Location</p>
                    <p>Delivary Location</p>
                </div>
                <h1>9:50</h1>
                <p>Estimated Delivery Time</p>
                <br/>
                <div className="review-box">
    <p>Ordered by: {auth.user && auth.user.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;