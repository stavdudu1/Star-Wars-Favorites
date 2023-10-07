import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons'
import InfoModal from '../InfoModal/InfoModal';



function MovieDetails({ movie, onFavoriteToggle, favorites, onInfoClick, showModal }) {
    if (!movie) return null;
    return (
      <div className="selected-movie-container">
        <img className="selcted-movie-img" src={`/posters/${movie.episode_id}-banner.jpg`} alt="Movie Poster" />
          
            <div className="selected-movie">
              <h1>{movie.title} </h1>
              <p>
                <strong>Episode:</strong> {movie.episode_id}              
                <button className="info-button" onClick={onInfoClick}>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </button>
                {showModal && <InfoModal movie={movie} onClose={onInfoClick} />}
              </p>
              <button className="favorite-toggle-button" onClick={() => onFavoriteToggle(movie)}>
               {favorites.some(fav => fav.episode_id === movie.episode_id) ? <FontAwesomeIcon icon={fullStar} /> : <FontAwesomeIcon icon={emptyStar} />}
              </button>

            </div>
      </div>
    );
  }

export default MovieDetails;

