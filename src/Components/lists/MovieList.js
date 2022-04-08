import React from "react";
import "./MovieList.css";
import MovieCard from "../cards/MovieCard";
import AddMovie from "../add/AddMovie";

const MovieList = ({
  removeFromList,
  movies,
  addToList,
  searchByTitle,
  searchByRating,
}) => {
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
          <MovieCard
            key={index}
            movie={movie}
            removeFromList={removeFromList}
          />
        ))}
      <AddMovie addToList={addToList} />
    </div>
  );
};
export default MovieList;
