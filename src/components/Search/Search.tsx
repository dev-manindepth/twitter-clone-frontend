import React from 'react'
import search from '../../assets/search.png'
import './search.css';

const Search:React.FC = () => {
  return (
    <div className='search-container'>
        <img src={search} alt="search" className='search-icon'/>
        <input type="text" placeholder='Search Twitter' className='search-input'/>
    </div>
  )
}

export default Search