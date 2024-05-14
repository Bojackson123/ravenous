import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <SearchBar />
    <BusinessList />
  </React.StrictMode>
);


