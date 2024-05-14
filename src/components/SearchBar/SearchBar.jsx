import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-container">
            <div className='filters'>
                <h2>Best<br/>Match</h2>
                <h2>Highest<br/>Rated</h2>
                <h2>Most<br/>Reviewed</h2>
            </div>
            <div className='white-line'></div>
            <div className='search-bars'>
                <input className='left-bar' placeholder='Search Businesses' />
                <input className='right-bar' placeholder='Where?' />
            </div>
            <div className='search-button'>
                <button>Let's Go</button>
            </div>
        </div>
    );
};

export default SearchBar;