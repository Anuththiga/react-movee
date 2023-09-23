import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Movies.css"
import useGenre from "../../Components/Genres/UseGenre";
import MovieList from '../../Components/MovieList/MovieList';
import Genres from '../../Components/Genres/Genres';
import { Container } from '@mui/material';
import CustomPagination from '../../Components/Pagination/CustomPagination';

const Movies = () => {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();

  const genreforURL = useGenre(selectedGenres);

  const getMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}}`
    );
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  }

  useEffect(() => {
    window.scroll(0,0);
    getMovies();

  }, [genreforURL, page]);

  return (
    <Container>
      <span className='page-title'>
        Discover Movies
      </span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className='trending'>
       <MovieList
        lists={content}
        type="movie"
        />
      </div>
      {
        numberOfPages > 1 && (
          <CustomPagination
            setPage={setPage}
            numberOfPages={numberOfPages}
          />
        )
      }
      </Container>
  )
}

export default Movies