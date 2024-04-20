import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Search from "../Search/Search";

const DropdownMenu = ({ options, handleOptionClick }) => {
  return (
    <div className="dropdown-menu">
      {options.map((option) => (
        <p key={option} onClick={() => handleOptionClick(option)}>
          {option}
        </p>
      ))}
    </div>
  );
};

const Navbar = ({ setSelectedCategory, myMovies }) => {
  const [toggleGenresMovies, setToggleGenresMovies] = useState(false);
  const [toggleGenresTvShows, setToggleGenresTvShows] = useState(false);
  const [toggleMyMovies, setToggleMyMovies] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null); // State to store movie details

  const handleToggleGenresMovies = () => {
    setToggleGenresMovies(!toggleGenresMovies);
    if (toggleGenresTvShows) {
      setToggleGenresTvShows(false);
    }
  };

  const handleToggleGenresTvShows = () => {
    setToggleGenresTvShows(!toggleGenresTvShows);
    if (toggleGenresMovies) {
      setToggleGenresMovies(false);
    }
  };

  const handleToggleMyMovies = () => {
    setToggleMyMovies(!toggleMyMovies);
  };

  const handleGenre = (genre, isMovie) => {
    setSelectedCategory(genre);
    setToggleGenresMovies(false);
    setToggleGenresTvShows(false);
  };

  const movieGenres = [
    "NetflixOriginals",
    "TopRated",
    "Action",
    "Adventure",
    "Comedy",
    "Thriller",
    "Romance",
    "SciFi",
    "Crime",
    "Drama",
    "Popular",
  ];

  const tvGenres = ["NetflixOriginals", "HBO", "Best", "Popular", "On Air"];

  return (
    <>
      <nav className="navbar_container">
        <div className="navbar">
          <h1 style={{ cursor: "pointer" }}>
            Cine<span style={{ color: "yellowgreen" }}>Hub</span>
          </h1>
          <div className="navbar_categories">
            <div className="navbar_categories_movie">
              <h4 onClick={handleToggleGenresMovies}>Movies</h4>
              {toggleGenresMovies && (
                <DropdownMenu
                  options={movieGenres}
                  handleOptionClick={(option) => handleGenre(option, true)}
                />
              )}
            </div>
            <div className="navbar_categories_tv-show">
              <h4 onClick={handleToggleGenresTvShows}>TV Shows</h4>
              {toggleGenresTvShows && (
                <DropdownMenu
                  options={tvGenres}
                  handleOptionClick={(option) => handleGenre(option, false)}
                />
              )}
            </div>
            <div className="navbar_categories_movie">
              <h4 onClick={handleToggleMyMovies}>My movies</h4>
              <div className="dropdown-menu">
                {toggleMyMovies &&
                  myMovies.map((movie) => <p key={movie.Id}>{movie.Name}</p>)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
