import React from 'react';
import "./MovieList.css"
import Card from '../Card/Card';

const MovieList = ({ lists, type}) => {

  return (
    <div className='movie__list'>
      <h2 className='list__title'>TRENDING</h2>
      <div className='list__cards'>
        {
          lists.map((list) => (
            <Card 
              list={list}
              key={list.id}
              type={list.media_type ? list.media_type : type}
              />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList