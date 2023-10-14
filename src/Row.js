import React, { Component } from "react";
import "./App.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const API_KEY = "b5dda60f5c2b8b491e29291bcca7b4cd";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const { category } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.results });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.movies.map((movie) => (
            <div className="movie-container" key={movie.id}>
              <img
                className="poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title}
              ></img>
              <div className="hover-info">
                <p>{movie.title}</p>
              </div>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default Row;
