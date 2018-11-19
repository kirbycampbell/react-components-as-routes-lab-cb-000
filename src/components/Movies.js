import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div>{movies.map(movie => {
          <li>{movie.title}</li>
        })}</div>
    </div>
  );
};

export default Movies;
