import React from 'react';
import './Business.css';


function Business(props) {
    return (
        <div className='business'>
            <div className='image'>
                <img 
                    src={props.business.imageSrc}
                    alt='props'
                />
            </div>
            <div className='title'>
                <h2>{props.business.name}</h2>
            </div>
            <div className='left'>
                <p>{props.business.address}</p>
                <p>{props.business.city}</p>
                <p>{props.business.state} {props.business.zipCode}</p>
            </div>
            <div className='right'>
                <h3>{props.business.category}</h3>
                <p className='rating'>{props.business.rating} stars</p>
                <p>{props.business.reviewCount} reviews</p>
            </div>
        </div>
    );
};

export default Business;