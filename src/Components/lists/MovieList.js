import React, {useRef} from "react";
import './MovieList.css';
import MovieCard from "../cards/MovieCard";


const MovieList = (props) => {
    //initialise the input element using useRef
    const inputEl = useRef("");
    const getSearchTerm = () =>{
        console.log(inputEl);
    }
    return (
        <div className="MovieList">
            {props.movies.map((movie,index) => 
               <MovieCard movie={movie}/>
            )}
        </div>
    )
}
export default MovieList;