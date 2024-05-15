import React from 'react'; 
import './BusinessList.css';
import Business from '../Business/Business';





function BusinessList(props) {
    return (
        <div>
            <div className='BusinessList'>
                {
                    props.businessList.map((business) => {
                        return <Business business={business} />;
                    })
                }
            </div>
        </div>
    );
};

export default BusinessList;