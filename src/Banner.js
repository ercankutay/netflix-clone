import React, { useState, useEffect } from "react";
import "./App.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = "b5dda60f5c2b8b491e29291bcca7b4cd";

function Banner() {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  const fetchRandomMovie = () => {
    const categories = ["popular", "now_playing", "top_rated", "upcoming"];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const url = `https://api.themoviedb.org/3/movie/${randomCategory}?api_key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomIndex];
        setRandomMovie(randomMovie);
      });
  };

  return (
    <header className="banner">
      {randomMovie && (
        <div className="banner-content">
          <div className="right-section">
            <h1 className="title">{randomMovie.original_title}</h1>
            <h2 className="subtitle">{randomMovie.overview}</h2>
          </div>
          <div className="banner-image">
            <img
              src={`${base_url}${randomMovie.poster_path}`}
              alt={randomMovie.original_title}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Banner;
