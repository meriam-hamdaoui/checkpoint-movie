import React from 'react';
import './SearchMovie.css';
import Rating from '../rates/Rating';

function SearchMovie({setSearchByTitle, setSearchByRating,searchByRating}) {
  return (
    <div>
        <div className='search-container'>
            <input type="text"
                placeholder='Search for a movie ...'
                onChange={(e) => setSearchByTitle(e.target.value)}/>
            <Rating setSearchByRating={setSearchByRating} rate={searchByRating}/>
        </div>
    </div>
  )
}

export default SearchMovie;