import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    {directors.map((movie, index) => {
      <div key={index}>
      <li>{director.name}</li>

        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}</div>
    })}
    </div>
  );
}

export default Directors
