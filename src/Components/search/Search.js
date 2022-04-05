import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap'
import './Search.css';
// import Movies from '../../Movies';

//onKeypress & getSearchTerm didn't work
function Search({inputEl, term, handleInput,getSearchTerm}) {
  // const [movies, setMovies] = useState(Movies)
  return (
    <div>
        <Navbar className='navFilter' fixed='top' bg="dark" expand="lg">
            <Navbar.Brand style={{color : 'white'}} href="#home">Movie List</Navbar.Brand>            
            <div class="search-container">
              <input 
                ref={inputEl}
                type="text" 
                name="search" 
                placeholder="Search for a movie ..." 
                className="search-input"
                //the getSearchTerm will help us to find the movie by the input
                onChange={handleInput}
                onKeyPress={getSearchTerm} 
                value={term}                              
              />
              <a href="#" className="search-btn">
                <i class="fas fa-search"></i>      
              </a>
            </div>               
        </Navbar>
    </div>
  )
}

export default Search