import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    <div>{this.actors.map((movie) => {
      <div>
      <li>{movie.name}</li>
      <li>{movie.movie}</li>
      </div>
    })}</div>
    </div>
  );
};

export default Actors;
