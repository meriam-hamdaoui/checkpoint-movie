import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap'
import './Search.css';
// import Movies from '../../Movies';


function Filter({handleInput}) {
  // const [movies, setMovies] = useState(Movies)
  return (
    <div>
        <Navbar className='navFilter' fixed='top' bg="dark" expand="lg">
            <Navbar.Brand style={{color : 'white'}} href="#home">Movie List</Navbar.Brand>            
            <div class="search-container">
              <input 
                type="text" 
                name="search" 
                placeholder="Search for a movie ..." 
                className="search-input"
                onChange={handleInput}                              
              />
              <a href="#" className="search-btn">
                <i class="fas fa-search"></i>      
              </a>
            </div>               
        </Navbar>
    </div>
  )
}

export default Filter