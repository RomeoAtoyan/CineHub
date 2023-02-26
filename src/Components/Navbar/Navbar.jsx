// import React, { useState } from "react";
// import MovieGenres from "../MovieRequests";
// import "./Navbar.css";

// const Navbar = ({ setSelectedCategory, selectedCategory }) => {
//   const [toggleMovieGenres, setToggleMovieGenres] = useState(false);
//   const [toggleTVGenres, setToggleTVGenres] = useState(false);

//   const handleMovieToggle = () => {
//     setToggleMovieGenres(!toggleMovieGenres);
//     setToggleTVGenres(false);
//   };

//   const handleGenre = (genre) => {
//     setSelectedCategory(genre);
//     setToggleMovieGenres(!toggleMovieGenres)
//     setToggleTVGenres(!toggleTVGenres)
//   };

//   const handleTvToggle = () => {
//     setToggleTVGenres(!toggleTVGenres);
//   };

//   return (
//     <nav className="navbar_container">
//       <div className="navbar">
//         <h1 style={{ cursor: "pointer" }}>
//           Cine<span style={{ color: "yellowgreen" }}>Hub</span>
//         </h1>
//         <div className="navbar_categories">
//           <div className="navbar_categories_movie">
//             <h4 onClick={handleMovieToggle}>Movies</h4>
//             {toggleMovieGenres ? (
//               <div className="dropdown-movie">
//                 <p onClick={() => handleGenre("TopRated")}>Top Rated</p>
//                 <p onClick={() => handleGenre("Action")}>Action</p>
//                 <p onClick={() => handleGenre("Adventure")}>Adventure</p>
//                 <p onClick={() => handleGenre("Comedy")}>Comedy</p>
//                 <p onClick={() => handleGenre("Thriller")}>Thriller</p>
//                 <p onClick={() => handleGenre("Romance")}>Romance</p>
//                 <p onClick={() => handleGenre("SciFi")}>SciFi</p>
//                 <p onClick={() => handleGenre("Crime")}>Crime</p>
//                 <p onClick={() => handleGenre("Drama")}>Drama</p>
//                 <p onClick={() => handleGenre("Popular")}>Popular</p>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="navbar_categories_tv-show">
//             <h4 onClick={handleTvToggle}>Tv Show</h4>
//             {toggleTVGenres ? (
//               <div className="dropdown-tv">
//                 <p onClick={() => handleGenre("TVBest")}>Best</p>
//                 <p onClick={() => handleGenre("TVPopular")}>Popular</p>
//                 <p onClick={() => handleGenre("TVOnAir")}>On Air</p>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import MovieGenres from "../MovieRequests";
import "./Navbar.css";

const Navbar = ({ setSelectedCategory, selectedCategory }) => {
  const [toggleMovieGenres, setToggleMovieGenres] = useState(false);
  const [toggleTVGenres, setToggleTVGenres] = useState(false);

  const handleMovieToggle = () => {
    setToggleMovieGenres(!toggleMovieGenres);
    setToggleTVGenres(false);
  };

  const handleGenre = (genre, isMovie) => {
    setSelectedCategory(genre);
    if (isMovie) {
      setToggleMovieGenres(false);
    } else {
      setToggleTVGenres(false);
    }
  };

  const handleTvToggle = () => {
    setToggleTVGenres(!toggleTVGenres);
    setToggleMovieGenres(false);
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
                <p onClick={() => handleGenre("NetflixOriginals", true)}>
                  Netflix
                </p>
                <p onClick={() => handleGenre("HBO", true)}>HBO</p>
                <p onClick={() => handleGenre("TopRated", true)}>Top Rated</p>
                <p onClick={() => handleGenre("Action", true)}>Action</p>
                <p onClick={() => handleGenre("Adventure", true)}>Adventure</p>
                <p onClick={() => handleGenre("Comedy", true)}>Comedy</p>
                <p onClick={() => handleGenre("Thriller", true)}>Thriller</p>
                <p onClick={() => handleGenre("Romance", true)}>Romance</p>
                <p onClick={() => handleGenre("SciFi", true)}>SciFi</p>
                <p onClick={() => handleGenre("Crime", true)}>Crime</p>
                <p onClick={() => handleGenre("Drama", true)}>Drama</p>
                <p onClick={() => handleGenre("Popular", true)}>Popular</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="navbar_categories_tv-show">
            <h4 onClick={handleTvToggle}>Tv Show</h4>
            {toggleTVGenres ? (
              <div className="dropdown-tv">
                <p onClick={() => handleGenre("NetflixOriginals", false)}>
                  Netflix
                </p>
                <p onClick={() => handleGenre("HBO", true)}>HBO</p>
                <p onClick={() => handleGenre("TVBest", false)}>Best</p>
                <p onClick={() => handleGenre("TVPopular", false)}>Popular</p>
                <p onClick={() => handleGenre("TVOnAir", false)}>On Air</p>
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
