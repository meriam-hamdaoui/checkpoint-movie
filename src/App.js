import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/lists/MovieList";
import SearchMovie from "./Components/Search/SearchMovie";
//we need the {} bcz our movies is an object not a component
import { Movies } from "./Movies";

function App() {
  //states for our movies components
  const [movies, setMovies] = useState(Movies);
  //states for search movies
  const [searchByTitle, setSearchByTitle] = useState("");
  //states for rating
  const [searchByRating, setSearchByRating] = useState(0);

  //add function
  const addToList = (film) => {
    setMovies([...movies, film]);
  };
  // const removeFromList = (index) => {
  //   var newMovies = Movies;
  //   newMovies.splice(index, 1);
  //   setMovies([...newMovies]);
  // };removeFromList={removeFromList}
  return (
    <div className="App">
      <SearchMovie
        setSearchByTitle={setSearchByTitle}
        setSearchByRating={setSearchByRating}
        searchByRating={searchByRating}
      />
      <MovieList
        movies={movies}
        setMovies={setMovies}
        searchByTitle={searchByTitle}
        searchByRating={searchByRating}
        addToList={addToList}
      />
    </div>
  );
}

export default App;
