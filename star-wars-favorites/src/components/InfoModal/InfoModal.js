function InfoModal({ onClose, movie }) {

    function formatDate(isoDate) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };
          return new Date(isoDate).toLocaleDateString('en-US', options);
      }

    return (
      <div className="modal">
        <div className="modal-content">
        <button className="info-close-button" onClick={onClose}>X</button>
          <h2>{movie.title} </h2>
          <p>Episode: {movie.episode_id}</p>
          <p>Release Date: {formatDate(movie.release_date)}</p>
          <p>Director: {movie.director}</p>
          <p>Producer: {movie.producer}</p>
        </div>
      </div>
    );
  }
  
  export default InfoModal;