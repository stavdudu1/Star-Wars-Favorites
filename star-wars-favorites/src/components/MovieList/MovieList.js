import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import FavoriteMovies from '../FavoriteMovies/FavoriteMovies';

function MovieList({ onMovieSelect, favorites }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  const sortedMovies = movies.sort((a, b) => a.episode_id - b.episode_id);

  return (
    <div>
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          <>
          <div className="movie-list">
          {sortedMovies.map((movie) => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))} </div>
          {(favorites.length > 0) ? <FavoriteMovies favorites={favorites} onMovieSelect={onMovieSelect} /> : null }
        </>
        )}
    </div>
);
}

export default MovieList;
