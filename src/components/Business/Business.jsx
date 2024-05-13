import React from 'react';
import './Business.css';


function Business({business}) {
    return (
        <div className='business'>
            <div className='image'>
                <img 
                    src={`${business.imageSrc}`}
                    alt='business'
                />
            </div>
            <div className='title'>
                <h2>{business.name}</h2>
            </div>
            <div className='left'>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
            </div>
            <div className='right'>
                <h3>{business.category}</h3>
                <p className='rating'>{business.rating} stars</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>
    );
};

export default Business;