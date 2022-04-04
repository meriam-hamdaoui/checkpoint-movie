import React, {useState} from 'react';
import './App.css';
import MovieList from './Components/lists/MovieList';
import Movies from './Movies'

function App() {
  const [movies, setMovies] = useState(Movies)
  return (<div className='App'>
    {/* btn add movie redirect to Add.js */}
    <MovieList movies={movies}/>     
  </div>);}

export default App;