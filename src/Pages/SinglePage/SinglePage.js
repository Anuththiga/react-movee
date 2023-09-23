import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./SinglePage.css";
import { Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SinglePage = () => {
    const{ id, type } = useParams();
    const [currentDetails, setCurrentDetails] = useState();
    const[video, setVideo] = useState();

    console.log(currentDetails)
    const getData = async () => {
        const { data } = await axios.get( 
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            );
            setCurrentDetails(data);
    }

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setVideo(data.results[0] ?.key);
    }

    useEffect(() => {
        getData();
        window.scroll(0, 0);
        fetchVideo();
    }, []);

  return (
    <div className='page'>
        <div className='page__intro'>
            <img className='page__backdrop' src={`https://image.tmdb.org/t/p/original${currentDetails ? currentDetails.backdrop_path : ""}`} />
        </div>
        <div className='page__detail'>
            <div className='page__detailleft'>
                <div className='page__posterbox'>
                    <img className='page_poster' src={`https://image.tmdb.org/t/p/original${currentDetails ? currentDetails.poster_path : ""}`} />
                </div>
            </div>
            <div className='page__detailright'>
                <div className='page__detailright-top'>
                    <div className='page__name'>{currentDetails ? currentDetails.original_title : ""}</div>
                    <div className='page__tagline'>{currentDetails ? currentDetails.tagline : ""}</div>
                    <div className="page__rating">
                            {currentDetails ? currentDetails.vote_average: ""} <i class="fas fa-star" />
                            <span className="page__voteCount">{currentDetails ? "(" + currentDetails.vote_count + ") votes" : ""}</span>
                        </div> 
                    <div className='page__runtime'>{currentDetails ? currentDetails.runtime + " mins" : ""}</div>
                    <div className='page__releasedate'>{currentDetails ? "Release date: " + currentDetails.release_date : ""}</div>
                    <div className='page__genres'>
                        {
                            currentDetails && currentDetails.genres ?
                            currentDetails.genres.map((genre) => (
                                <><span className='page__genre'>{genre.name}</span></>
                            )) :
                            ""
                        }
                    </div>
                </div>
                <div className='page__detailright-bottom'>
                    <div className='synopsis-text'>Synopsis</div>
                    <div>{currentDetails ? currentDetails.overview : ""}</div>
                </div>
            </div>
        </div>
        <div className='page__links'>
           <Button
            color="primary"
            target="__blank"
            variant="contained"
            startIcon={<YouTubeIcon />}
            href={`https://www.youtube.com/watch?v=${video}`}
           >Watch the Trailer</Button>
        </div>
    </div>
  )
}

export default SinglePage