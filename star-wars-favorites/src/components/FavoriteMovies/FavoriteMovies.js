import MovieItem from '@/components/MovieItem/MovieItem';

const FavoriteMovies = ( {favorites, onMovieSelect}) => {
    return (<div className="favorites-container"> 
        <div className="favorites-title">Your Favorites</div>
        <div className="favorites-list">{favorites.map(movie => 
            (<MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />))} </div>
    </div>
    );
}

export default FavoriteMovies;