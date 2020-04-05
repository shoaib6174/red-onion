import React from 'react';
import bg from '../../../hot-onion-restaurent-resources-master/Image/bannerbackground.png'

const HeaderBg = () => {
    return (
        <div>
            <div className='container'>
                <img src={bg} alt=""/>
                <div className='centered'>
                    <h4> Best foods waintng for your belly    </h4>
                    <input type="text" name="search" placeholder="    Search Food Items"></input>
                    <button> Search</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBg;