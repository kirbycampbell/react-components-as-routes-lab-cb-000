import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div>{this.movies.map((movie) => {
          <div>
          <li>{movie.title}</li>
          <li>{movie.time}</li>
          <li>{movie.genre}</li>
          </div>
        })}</div>
    </div>
  );
};

export default Movies;
