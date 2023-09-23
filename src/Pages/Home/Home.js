import axios from 'axios'
import "./Home.css"
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MovieList from '../../Components/MovieList/MovieList';
import { Container } from '@mui/material';


const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }, [])

  return (
    <>
        <div className='banner'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    movies.map((movie) => (
                        <div>
                            <div className='banner-image'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className='banner-image__overlay'>
                                <div className='banner-image__title'>{movie ? movie.original_title : ""}</div>
                                <div className='banner-image__runtime'>
                                    {movie ? movie.release_date : ""}
                                    <span className='banner-image__rating'>
                                        {movie ? movie.vote_average : ""}
                                        {/* <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#ffd700",}} /> */}
                                    </span>
                                </div>
                                <div className='banner-image__description'>{movie ? movie.overview : ""}</div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <Container>
            <MovieList
                lists={movies}
                type="all"
            />
            </Container>
        </div>
    </>
  )
}

export default Home