import React, { useState } from "react";
import "./Navbar.css";

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

const Navbar = ({ setSelectedCategory }) => {
  const [toggleGenres, setToggleGenres] = useState(false);

  const handleToggleGenres = () => {
    setToggleGenres(!toggleGenres);
  };

  const handleGenre = (genre, isMovie) => {
    setSelectedCategory(genre);
    setToggleGenres(false);
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
    <nav className="navbar_container">
      <div className="navbar">
        <h1 style={{ cursor: "pointer" }}>
          Cine<span style={{ color: "yellowgreen" }}>Hub</span>
        </h1>
        <div className="navbar_categories">
          <div className="navbar_categories_movie">
            <h4 onClick={handleToggleGenres}>Movies</h4>
            {toggleGenres && (
              <DropdownMenu
                options={movieGenres}
                handleOptionClick={(option) => handleGenre(option, true)}
              />
            )}
          </div>
          <div className="navbar_categories_tv-show">
            <h4 onClick={handleToggleGenres}>TV Shows</h4>
            {toggleGenres && (
              <DropdownMenu
                options={tvGenres}
                handleOptionClick={(option) => handleGenre(option, false)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
