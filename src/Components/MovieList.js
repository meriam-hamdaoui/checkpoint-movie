import React from "react";
import './MovieList.css';

const MovieList = (props) => {
    return (
        <div className="MovieList">
            {props.movies.map((movie,index) => 
                <div className="movieCard">
                    <div className="title">
                        <h3>{movie.title} <br/> <span> released in </span> {movie.year}</h3>
                    </div>
                    <div className="poster">
                        <img src={movie.posterURL} alt={movie.title}/>
                    </div>
                    <div className="description">
                        <p>{movie.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MovieList;