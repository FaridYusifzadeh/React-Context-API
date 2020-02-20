import React from 'react';

const Movie = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>

      <p>{price}</p>
    </div>
  );
};

export default Movie;
