import React from "react";
import "./MovieCard.css";
import Rating from "../rates/Rating";

function MovieCard({
  movie: { title, year, posterURL, description, trailerURL, rating },
}) {
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <div className="croiX">
          <button className="btnX">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="title">
          <h3>
            {title} <br /> <span> released in </span> {year}
          </h3>
        </div>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="cardBottom">
        <a href={trailerURL} target="_blank">
          WATCH TRAILER ►
        </a>
        <Rating rate={rating} />
      </div>
    </div>
  );
}

export default MovieCard;
