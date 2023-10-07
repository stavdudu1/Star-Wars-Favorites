import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import './App.css'

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleInfoClick() {
    setShowModal(!showModal);
  }

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
    setShowModal(false);
  }

  return (
    <div className="app-container">
      {selectedMovie ? 
      <img className="bg-image" src={`/posters/${selectedMovie.episode_id}-banner.jpg`} alt="Movie Poster"/> 
      : null}
        <div className="App">
          <div>
            <MovieDetails movie={selectedMovie} onFavoriteToggle={handleFavorite} onInfoClick={handleInfoClick} favorites={favorites} showModal={showModal}/> 
            <MovieList onMovieSelect={handleMovieSelect} favorites={favorites}/>
          </div>

        </div>
    </div>  
  );
}

export default App;