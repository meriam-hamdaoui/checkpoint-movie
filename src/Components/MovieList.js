import React from "react";
import './MovieList.css';

const MovieList = (props) => {
    return (
        <div className="MovieList">
            {props.movies.map((movie,index) => 
                <div className="movieCard">
                    <div className="">
                        <h3 className="title">{movie.title} <span> released in </span> {movie.year}</h3>
                        <img style={{width : 250, heigth : 356}} src={movie.posterURL} alt={movie.title}/>
                    </div>
                    <div className="">
                        <p>{movie.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default MovieList;