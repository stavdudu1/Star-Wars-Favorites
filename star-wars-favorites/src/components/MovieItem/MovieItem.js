import React from 'react';

function MovieItem({ movie, onMovieSelect }) {
  return (
    <div key={movie.episode_id}>
      <button  className="movie-button" onClick={() => onMovieSelect(movie)}>
          <img className="list-movie-img" src={`/posters/${movie.episode_id}.jpg`} alt="Movie Poster" />
          <div className="title-text-list">{movie.title}</div>
          
      </button>
    </div>
  );
}

export default MovieItem;