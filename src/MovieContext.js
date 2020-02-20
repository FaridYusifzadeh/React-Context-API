import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 1234 },
    { name: 'Dracula', price: '$20', id: 223498 },
    { name: 'Farid Yusifzadeh', price: '$150', id: 12978534 }
  ]);
  return <MovieContext.Provider value={[movies,setMovies]}>{props.children}</MovieContext.Provider>;
};
