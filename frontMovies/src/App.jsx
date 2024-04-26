import React, { useState, useEffect } from 'react';
import './App.css';
import { Components } from './components';

//import 'milligram';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:2000/movies');
        if (!response.ok) {
          throw new Error('Error fetching movies');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (

    <div className="container">
      <h1>Lista de Películas</h1>
      <div className="movie-grid">
        {movies.map(movie => ( 
          <div key={movie.id} className="movie">
          <header>
             <h2>{movie.title}</h2>
          </header>
          <picture>
             <img src={movie.poster} alt={movie.title} />
          </picture>
          <section>
            <p>Director: {movie.director}</p>
            <p>Año: {movie.year}</p>
            <p>Duracion: {movie.duration}M</p>
          </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;


