import React from 'react';
import './MovieCard.css'; 
import Rating from '../rates/Rating';

function MovieCard({movie}) {
  return (    
    <div className='movieCard'>
        <div className="title">
            <h3>{movie.title} <br/> <span> released in </span> {movie.year}</h3>
        </div>
        <div className="poster">
            <img src={movie.posterURL} alt={movie.title}/>
        </div>
        <div className="description">
            <p>{movie.description}</p>
        </div>
        <div className='cardBottom'>
            <a  href={movie.trailerURL}>WATCH TRAILER ►</a>
            <Rating rate={movie.rating}/>
        </div>       
    </div>   
  )
}

export default MovieCard