import React from "react";
import "./MovieCard.css";
import Rating from "../rates/Rating";
//props in title  removeFromList, and onClick
function MovieCard({
  movie: { title, year, posterURL, description, trailerURL, rating },
}) {
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <button className="btnX">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3 className="title">
          {title} <br /> <span> released in </span> {year}
        </h3>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="cardBottom">
        <a href={trailerURL} target="_blank" rel="noopener noreferrer">
          WATCH TRAILER ►
        </a>
        <Rating rate={rating} />
      </div>
    </div>
  );
}

export default MovieCard;
