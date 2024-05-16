import React, {useState}from 'react';
import './SearchBar.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

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

    const handleSubmit = () => {
        if (!search || !location) {
            alert('Please enter a search term and location');
            return;
        }
        console.log(`Searching Yelp with ${search}, ${location}, ${sortBy}`)
    };


    return (
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
                <input className='left-bar' placeholder='Search Businesses' 
                       onChange={handleSearch}/>
                <input className='right-bar' placeholder='Where?' 
                       onChange={handleLocation}/>
            </div>
            <div className='search-button'>
                <button onClick={handleSubmit}>Let's Go</button>
            </div>
        </div>
    );
};

export default SearchBar;