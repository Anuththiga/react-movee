import React, { useEffect } from 'react';
import axios from 'axios';
import { Chip } from '@mui/material';

const Genres = ({ type, setPage, selectedGenres, setSelectedGenres, genres, setGenres }) => {
  
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    }

    const getGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };

    useEffect(() => {
        getGenres();    
    }, []);
  
    return (
    <div style={{ padding: " 6px 0" }}>
        {
            selectedGenres.map((genre) => (
                <Chip
                    style={{ margin: 2 }}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    color="primary"
                    onDelete={() => handleRemove(genre)}
                />
            ))
        }
        {
            genres.map((genre) => (
                <Chip
                    label={genre.name}
                    size='small'
                    style={{color: "white", margin: 2, backgroundColor: "#434343"}}
                    key={genre.id}
                    clickable
                    onClick={() => handleAdd(genre)}
                />
            ))
        }
    </div>
  )
}

export default Genres