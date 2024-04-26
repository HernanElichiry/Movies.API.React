import { Injectable, NotFoundException } from '@nestjs/common';

import * as fs from 'fs';
//import {movies} from 'data/movies.json';
import { MovieDto } from './movies.dto';


@Injectable()
export class MovieService {
  private readonly movies: MovieDto[];

  constructor() {
    // Cargar el JSON de películas
    const rawData = fs.readFileSync('./data/movies.json');
    this.movies = JSON.parse(rawData.toString());
  }

 getMovies() {
    return this.movies;
  }

 getMovieById(id: string) {
     const movie = this.movies.find(movie =>movie.id === id);    
      if (!movie) {
        throw new NotFoundException(`Película con id '${id}' no encontrada`);
      }
      return movie;
    
  }
}


