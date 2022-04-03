import React, {useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';

function App() {
  const [movies, setMovies] = useState([{
    id : 0,
    title : 'Baby Boss',
    year : 2017,
    description : 'C est toujours un choc de voir ses parents rentrer à la maison avec un bébé dans les bras – surtout quand il porte une cravate, qu’il se balade avec un attaché-case et qu’il a la voix d’un quinquagénaire !',
    posterURL : 'https://movieposters2.com/images/1438738-b.jpg',    
},
{
    id : 1,
    title : 'Minions',
    year : 2015,
    description : 'Stuart, Kevin et Bob sont recrutés par Scarlet Overkill, une super-vilaine qui, aux côtés de son inventeur de mari Herb, élabore un complot pour conquérir le monde',
    posterURL : 'https://media-cache.cinematerial.com/p/500x/qhbpk8mc/minions-italian-movie-poster.jpg?v=1456417738',   
},
{
    id : 2,
    title : 'Pokémon',
    year : 2002,
    description : 'Les films Pokémon sont, comme la série animée, des aventures distinctes de la plupart des jeux vidéo Pokémon et mettent en scène Sacha en tant que personnage principal.',
    posterURL : 'https://m.media-amazon.com/images/M/MV5BMTI1MTAyMTYzMF5BMl5BanBnXkFtZTcwMTcyNTQyMQ@@._V1_.jpg',    
},
{
    id : 3,
    title : 'The Croods',
    year : 2013,
    description : 'un tremblement de terre ayant détruit leur caverne, une famille préhistorique mal dégrossie doit s aventure en terrain inconnu à la recherche d un nouvel habita',
    posterURL : 'https://i.pinimg.com/474x/dc/7d/f8/dc7df86aa8bc0983e914eb60a4b191f9.jpg',    
},
{
    id : 4,
    title : 'Hotel Transylvania 3',
    year : 2018,
    description : 'Her dad is lonely and stressed. Time for a familly vacation! But watch out - someone is out to crush all monsterkind',
    posterURL : 'https://i.pinimg.com/originals/27/35/30/2735308df0173f4d698674e806c1fcc2.jpg',   
},
{
    id : 5,
    title : 'The Smurfs',
    year : 2017,
    description : 'Smurfette and best pals Brainy, Clumsy and Hefty journey deep into the Forbidden Forest to save a myserious lost village from evil wizard Gargamel',
    posterURL : 'https://m.media-amazon.com/images/M/MV5BMTg1NjgyMTYzM15BMl5BanBnXkFtZTgwMzIxNDc4MDI@._V1_.jpg',   
}])
  return (<div className='App'>
    <MovieList movies={movies} />
  </div>);}

export default App;
