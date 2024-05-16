import React from 'react'; 
import './BusinessList.css';
import Business from '../Business/Business';

function BusinessList(props) {
    if (!props.searchPerformed) {
        return (
            <div className='welcome'>
                <p>Welcome to Ravenous! To get started, use the search bar to find your favorite foods in any city of your choice.</p>
            </div>
        );
    }

    if (props.businessList.length === 0) {
        return (
            <div className='null'>
                <p>No businesses found</p>
            </div>
        );
    }

    return (
        <div>
            <div className='BusinessList'>
                {props.businessList.map((business) => (
                    <Business key={business.id} business={business} />
                ))}
            </div>
        </div>
    );
}

export default BusinessList;