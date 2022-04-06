import React from "react";
import "./SearchMovie.css";
import Rating from "../rates/Rating";

function SearchMovie({ setSearchByTitle, setSearchByRating, searchByRating }) {
  return (
    <div className="SearchMovie">
      <div className="search-container">
        <div className="search-title">
          <span className="searchTxt">Title Filtering</span>
          {/* <input
            type="text"
            placeholder="title ..."
            onChange={(e) => setSearchByTitle(e.target.value)}
          /> */}
          <div class="box">
            <form name="search">
              <input
                className="input"
                type="text"
                name="txt"
                onmouseout="document.search.txt.value = ''"
                onChange={(e) => setSearchByTitle(e.target.value)}
              />
            </form>
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div className="search-rating">
          <span className="searchTxt">Rate Filtering</span>
          <Rating setSearchByRating={setSearchByRating} rate={searchByRating} />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;

// import React from 'react';
// import './SearchMovie.css';
// import Rating from '../rates/Rating';

// function SearchMovie({setSearchByTitle, setSearchByRating,searchByRating}) {
//   return (
//     <div>
//         <div className='search-container'>
//             <input type="text"
//                 placeholder='Search for a movie ...'
//                 onChange={(e) => setSearchByTitle(e.target.value)}/>
//             <Rating setSearchByRating={setSearchByRating} rate={searchByRating}/>
//         </div>
//     </div>
//   )
// }

// export default SearchMovie;
