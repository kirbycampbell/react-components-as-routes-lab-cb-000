import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    <div>{this.directors.map((movie) => {
      <div>
      <li>{director.name}</li>
      <li>{director.movie}</li>
      </div>
    })}</div>
    </div>
  );
}

export default Directors
