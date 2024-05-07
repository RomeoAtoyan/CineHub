import React, { useState, useEffect } from "react";
import axios from "../axiosFile";
import MovieGenres from "../MovieRequests";
import TVGenres from "../ShowRequests";
import "./Media.css";
import { PuffLoader } from "react-spinners";

const Media = ({ actors, setActors, setBannerMovie, selectedCategory }) => {
  const [movies, setMovies] = useState([]);
  const img_base_url = "https://image.tmdb.org/t/p/original";
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(true);
  
  const getMovies = async () => {
    setloading(true);
    const response = await axios.get(
      selectedCategory.startsWith("TV")
        ? `${TVGenres[`fetch${selectedCategory}`]}&page=${page}`
        : `${MovieGenres[`fetch${selectedCategory}`]}&page=${page}`
    );
    setloading(false);
    setMovies(response.data.results);
  };

  const handleMovieClick = async (movie, movieId) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let response;
    setBannerMovie(movie);

    const url = `https://movie-tv-music-search-and-download.p.rapidapi.com/search?keywords=${
      movie?.title || movie?.original_name
    }&quantity=40&page=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2238a70dadmshde0dd25d90489a2p17fe94jsn2c74b54dec70",
        "X-RapidAPI-Host": "movie-tv-music-search-and-download.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Parse JSON response
      const resultArray = data.result; // Access the result array
      console.log(resultArray);
    } catch (error) {
      console.error(error);
    }

    if (movie.first_air_date) {
      response = await axios.get(`tv/${movieId}${TVGenres.fetchTVCredits}`);
      setActors(response.data.cast);
    } else {
      response = await axios.get(`movie/${movieId}${MovieGenres.fetchCredits}`);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getMovies();
  }, [selectedCategory, page, actors]);

  return (
    <div className="movie_container">
      <div className="pages">
        <i onClick={prevPage} className="fa-solid fa-angle-left"></i>
        <span>{page}</span>
        <i onClick={nextPage} className="fa-solid fa-angle-right"></i>
      </div>
      <h1 onClick={() => test()} style={{ color: "white" }}>
        {selectedCategory}
      </h1>
      {loading ? (
        <div className="movie_skeleton">
          <PuffLoader color="yellowgreen" />
        </div>
      ) : (
        <div className="movie">
          {movies.map((movie) => (
            <img
              style={{ borderRadius: "10px" }}
              width={"250px"}
              src={`${img_base_url}${movie.poster_path}`}
              alt={movie.title}
              key={movie.id}
              onClick={() => handleMovieClick(movie, movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Media;
