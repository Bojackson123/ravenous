import React, {useState}from 'react';
import BusinessList from '../BusinessList/BusinessList';
import './SearchBar.css';


function SearchBar() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
    const [businessList, setBusinessList] = useState([]);

    const handleSortChange = (sortOption) => {
        setSortBy(sortOption);
        // console.log(sortOption);
    };

    const handleSearch = ({target}) => {
        setSearch(target.value);
        // console.log(target.value);
    };

    const handleLocation = ({target}) => {
        setLocation(target.value);
        // console.log(target.value);
    };

    const handleSubmit = async () => {
        if (!search || !location) {
            alert('Please enter a search term and location');
            return;
        }
        
        const apiKey = 'g892hwMA39r9lqnrHCZ5DvTFwq3Zpsyi_yn1PTYavqtGoE8CVq4W0fQaNqT18KcapOFHeEcr_OHsJH0y9U_IaD0VQEKv5BPS-obRbLH20LppCCxCNHLnhYf9U9JFZnYx'; // Replace with your actual Yelp API key
        const url = `https://ravenous-bojackson-6fdfc5815a22.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&sort_by=${sortBy}&limit=50`;

        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const businesses = data.businesses || [];
            const businessListings = businesses.map((business) => ({
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: (business.categories[0] || {}).title,
                rating: business.rating,
                reviewCount: business.review_count,
                url: business.url,
            }));
            setBusinessList(businessListings);
        } catch (error) {
            console.error('Error fetching business listings:', error);
        }
    };




    return (
        <>
        <div className="search-container">
            <div className='filters'>
                <button 
                    className={sortBy === 'best_match' ? 'active' : ''}
                    onClick={() => handleSortChange('best_match')}
                >   
                    Best<br/>Match
                </button>

                <button 
                    className={sortBy === 'rating' ? 'active' : ''}
                    onClick={() => handleSortChange('rating')}
                >   
                    Highest<br/>Rated
                </button>

                <button 
                    className={sortBy === 'review_count' ? 'active' : ''}
                    onClick={() => handleSortChange('review_count')}
                >   
                    Most<br/>Reviewed
                </button>
            </div>
            <div className='white-line'>
                <div className={`highlight ${sortBy === 'best_match' ? 'active' : ''}`} style={{ left: '0%' }}></div>
                <div className={`highlight ${sortBy === 'rating' ? 'active' : ''}`} style={{ left: '33.33%' }}></div>
                <div className={`highlight ${sortBy === 'review_count' ? 'active' : ''}`} style={{ left: '66.66%' }}></div>
            </div>
            <div className='search-bars'>
                <input className='left-bar' placeholder='Food Type?' 
                       onChange={handleSearch}/>
                <input className='right-bar' placeholder='Where?' 
                       onChange={handleLocation}/>
            </div>
            <div className='search-button'>
                <button onClick={handleSubmit}>Let's Go</button>
            </div>
        </div>
        <BusinessList businessList={businessList}/>
        </>
    );
};

export default SearchBar;