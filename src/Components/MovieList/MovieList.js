import React from 'react';
import "./MovieList.css"
import Card from '../Card/Card';

const MovieList = ({movies}) => {

  return (
    <div className='movie__list'>
      <h2 className='list__title'>TRENDING</h2>
      <div className='list__cards'>
        {
          movies.map((movie) => (
            <Card movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList