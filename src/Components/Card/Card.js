import React, { useEffect, useState } from 'react';
import "./Card.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Card = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

  return (
    <>
    {isLoading ? 
        <div className='card'>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <div className='card'>
            <img className='card__img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
            <div className='card__overlay'>
                <div className='card__title'>{movie.original_title ? movie.original_title : movie.name}</div>
                <div className='card__runtime'>
                    {movie?movie.release_date:""}
                    <span className='card_rating'>{movie?movie.vote_average:""}</span>
                </div>
                <div className='card__description'>{movie ? movie.overview.slice(0,120)+"..." : ""}</div>
            </div>
        </div>
    }
    
    </>
  )
}

export default Card