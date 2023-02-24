import React, { useState, useEffect } from "react";
import axios from "../axiosFile";
import MovieGenres from "../MovieRequests";
import TVGenres from "../ShowRequests";
import "./Media.css";
import { PuffLoader } from "react-spinners";

const Media = ({
  actors,
  director,
  setActors,
  setDirectors,
  setBannerMovie,
  selectedCategory,
}) => {
  const [movies, setMovies] = useState([]);
  const img_base_url = "https://image.tmdb.org/t/p/original";
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(true);

  // const getMovies = async () => {
  //   setloading(true);
  //   const response = await axios.get(
  //     MovieGenres[`fetch${selectedCategory}`] + `&page=${page}`
  //   );
  //   setloading(false);
  //   setMovies(response.data.results);
  // };

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
    let response;
    setBannerMovie(movie);
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
