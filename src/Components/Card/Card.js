import React, { useEffect, useState } from 'react';
import "./Card.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from "react-router-dom"

const Card = ({list, type}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []);

  return (
    <>
    {isLoading ? 
        <div className='card'>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/${type}/${list.id}`} style={{ textDecoration: "none", color: "white" }}>
        <div className='card'>
            <img className='card__img' src={`https://image.tmdb.org/t/p/original${list?list.poster_path:""}`} />
            <div className='card__overlay'>
                <div className='card__title'>{list.original_title ? list.original_title : list.name}</div>
                <div className='card__runtime'>
                    {list?list.release_date:""}
                    <span className='card_rating'>{list?list.vote_average:""}</span>
                </div>
                <div className='card__description'>{list ? list.overview.slice(0,120)+"..." : ""}</div>
            </div>
        </div>
        </Link>
    }
    
    </>
  )
}

export default Card