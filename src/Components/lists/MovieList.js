import React from "react";
import './MovieList.css';
import MovieCard from "../cards/MovieCard";


const MovieList = (props) => {
    return (
        <div className="MovieList">
            {props.movies.map((movie,index) => 
               <MovieCard movie={movie}/>
            )}
        </div>
    )
}
export default MovieList;