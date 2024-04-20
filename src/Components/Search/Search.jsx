import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "../axiosFile";
import MovieGenres, { API_KEY } from "../MovieRequests";
import { useDebounce } from "../Debounce/Debounce";

const Search = ({ setBannerMovie }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [mediaType, setMediaType] = useState(null);
  const debouncedSearch = useDebounce(searchTerm, 600);

  const img_base_url = "https://image.tmdb.org/t/p/original";


  const getSearchedMovie = async () => {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
    );

    // Filter out movies if searching for TV shows
    const filteredResults =
      mediaType === "tv"
        ? movieResponse.data.results.filter(
            (result) => result.media_type === "tv"
          )
        : movieResponse.data.results;

    setSearchedMovie(filteredResults);
  };

  const BannerMovie = (movie) => {
    setBannerMovie(movie);
  };

  const searchMovie = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearInput = () => {
    setSearchTerm("");
    let input = document.getElementById("search-input");
    input.value = ""
  };

  useEffect(() => {
    if (debouncedSearch) {
      getSearchedMovie();
    }
  }, [debouncedSearch]);

  const getRating = (vote) => {
    if (!vote) {
      return "gray";
    } else if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  const emptySearch = debouncedSearch === "" ? "empty" : "";

  return (
    <div className="search_container">
      <div className="search_input">
        <input
          id="search-input"
          onChange={searchMovie}
          type="text"
          placeholder="Search media"
        />
        <i onClick={() => clearInput()} className="fa-solid fa-x"></i>
      </div>
      <div className={`search_results ${emptySearch}`}>
        {searchedMovie.map((movie, index) => (
          <div key={index} className="search_result">
            {movie?.poster_path ? (
              <img
                width={"70px"}
                src={`${img_base_url}${movie?.poster_path}`}
                alt=""
                onClick={() => {
                  BannerMovie(movie);
                }}
              />
            ) : (
              <div className="img_skeleton">?</div>
            )}
            <h2>{movie?.title ? movie?.title : movie?.name}</h2>
            <span className={`${getRating(movie?.vote_average)}`}>
              {Math.round(movie?.vote_average * 10) / 10}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
