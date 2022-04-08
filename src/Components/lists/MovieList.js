import React from "react";
import "./MovieList.css";
import MovieCard from "../cards/MovieCard";
import AddMovie from "../add/AddMovie";
//props in title  removeFromList,
//props in MoviCard component removeFromList={removeFromList}
const MovieList = ({ movies, addToList, searchByTitle, searchByRating }) => {
  //remove function

  return (
    <div className="MovieList">
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchByTitle.toLowerCase().trim()) &&
            movie.rating >= searchByRating
        )
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      <AddMovie addToList={addToList} />
    </div>
  );
};
export default MovieList;
