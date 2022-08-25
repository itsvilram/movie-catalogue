import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouritecomponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container">
          <img className="image" src={movie.Poster} alt="movie" onClick={()=> props.movieClickHandle(movie)}></img>
          <div
            onClick={() => props.favouriteHandle
              (movie)}
            className="overlay d-flex align-items-center justify-content-center"
               >
            <FavouriteComponent />
             </div>

          <div>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
