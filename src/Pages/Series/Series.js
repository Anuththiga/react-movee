import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Genres from '../../Components/Genres/Genres'
import axios from 'axios';
import useGenre from '../../Components/Genres/UseGenre';
import MovieList from '../../Components/MovieList/MovieList';
import CustomPagination from '../../Components/Pagination/CustomPagination';

const Series = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const getSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  }

  useEffect(() => {
    window.scroll(0, 0);
    getSeries();
  }, [genreforURL, page]);

  return (
    <Container>
      <span className='page-title'>
        Discover Series
      </span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className='trending'>
       <MovieList
        lists={content}
        type="tv"
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

export default Series