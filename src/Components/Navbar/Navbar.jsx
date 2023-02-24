import React, { useState } from "react";
import MovieGenres from "../MovieRequests";
import "./Navbar.css";

const Navbar = ({ setSelectedCategory, selectedCategory }) => {
  const [toggleMovieGenres, setToggleMovieGenres] = useState(false);
  const [toggleTVGenres, setToggleTVGenres] = useState(false);

  const handleMovieToggle = () => {
    setToggleMovieGenres(!toggleMovieGenres);
  };

  const handleGenre = (genre) => {
    setSelectedCategory(genre);
  };

  const handleTvToggle = () => {
    setToggleTVGenres(!toggleTVGenres);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar">
        <h1 style={{ cursor: "pointer" }}>
          Cine<span style={{ color: "yellowgreen" }}>Hub</span>
        </h1>
        <div className="navbar_categories">
          <div className="navbar_categories_movie">
            <h4 onClick={handleMovieToggle}>Movies</h4>
            {toggleMovieGenres ? (
              <div className="dropdown-movie">
                <p onClick={() => handleGenre("TopRated")}>Top Rated</p>
                <p onClick={() => handleGenre("Action")}>Action</p>
                <p onClick={() => handleGenre("Adventure")}>Adventure</p>
                <p onClick={() => handleGenre("Comedy")}>Comedy</p>
                <p onClick={() => handleGenre("Thriller")}>Thriller</p>
                <p onClick={() => handleGenre("Romance")}>Romance</p>
                <p onClick={() => handleGenre("SciFi")}>SciFi</p>
                <p onClick={() => handleGenre("Crime")}>Crime</p>
                <p onClick={() => handleGenre("Drama")}>Drama</p>
                <p onClick={() => handleGenre("Popular")}>Popular</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="navbar_categories_tv-show">
            <h4 onClick={handleTvToggle}>Tv Show</h4>
            {toggleTVGenres ? (
              <div className="dropdown-tv">
                <p onClick={() => handleGenre("TVBest")}>Best</p>
                <p onClick={() => handleGenre("TVPopular")}>Popular</p>
                <p onClick={() => handleGenre("TVOnAir")}>On Air</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
