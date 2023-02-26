import React, { useEffect } from "react";
import "./Banner.css";
import axios from "../axiosFile";
import MovieGenres from "../MovieRequests";
import TVGenres from "../ShowRequests";
import moment from "moment";

const Banner = ({
  actors,
  setActors,
  director,
  setDirector,
  bannerMovie,
  setBannerMovie,
  selectedCategory,
}) => {
  const img_Base_Url = "https://image.tmdb.org/t/p/original";

  const getBannerMovie = async () => {
    const response = await axios.get(MovieGenres.fetchNetflixOriginals);
    const randomBannerIndex = Math.floor(
      Math.random() * response.data.results.length
    );
    const randomMovie = response.data.results[randomBannerIndex];
    setBannerMovie(randomMovie);
  };

  const getCredits = async (mediaId) => {
    let response;
    if (bannerMovie.first_air_date) {
      response = await axios.get(`tv/${mediaId}${TVGenres.fetchTVCredits}`);
      setDirector(
        response.data.crew.find(
          (dir) =>
            dir.known_for_department === "Directing" || dir.job === "Directing"
        )
      );
      setActors(response?.data?.cast);
    } else if (bannerMovie.release_date) {
      response = await axios.get(`movie/${mediaId}${MovieGenres.fetchCredits}`);
      setDirector(
        response.data.crew.find(
          (dir) =>
            dir.known_for_department === "Directing" || dir.job === "Directing"
        )
      );
      setActors(response.data.cast);
    }
  };

  const comingSoon =
    bannerMovie?.vote_average === 0 && bannerMovie?.vote_count === 0
      ? "no_rating"
      : "";

  const movieTitle = bannerMovie?.title
    ? bannerMovie?.title
    : bannerMovie?.original_name;
  const noRating =
    bannerMovie?.vote_average === 0 && bannerMovie?.vote_count === 0 ? (
      <h1 className="coming_soon">
        {moment(bannerMovie?.release_date).format("D MMMM YYYY")}
      </h1>
    ) : (
      ""
    );
  const movieRating = Math.round(bannerMovie?.vote_average * 10) / 10;
  const lessActors = actors?.length < 6 ? "less_actors" : "";
  const directorName = director?.name ? (
    <h4 className="director" style={{ color: "yellowgreen" }}>
      Directed By : <span style={{ color: "white" }}>{director?.name}</span>
    </h4>
  ) : (
    ""
  );
  const actorSection = actors?.slice(0, 6).map((actor) => (
    <div className={`${actor ? "actors" : "no-actors"}`} key={actor.id}>
      <h5 style={{ color: "yellowgreen" }}>{actor?.character}</h5>
      <h4 style={{ color: "white" }}>{actor?.name}</h4>
      {actor?.profile_path ? (
        <img
          width={"100px"}
          src={`${img_Base_Url}${actor?.profile_path}`}
          alt=""
          style={{ borderRadius: "5px", cursor: "pointer" }}
        />
      ) : (
        <div className="alternative_profile">?</div>
      )}
    </div>
  ));

  const releaseDates = () => {
    if (bannerMovie?.release_date) {
      return new Date(bannerMovie?.release_date).getFullYear();
    } else if (bannerMovie?._date) {
      return new Date(bannerMovie?._date).getFullYear();
    } else if (bannerMovie?.first_air_date) {
      return new Date(bannerMovie?.first_air_date).getFullYear();
    }
  };

  const getRating = (vote) => {
    if (typeof vote !== "number") {
      return "gray";
    } else if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    getBannerMovie();
  }, []);

  useEffect(() => {
    if (bannerMovie) {
      getCredits(bannerMovie?.id);
    }
  }, [bannerMovie]);

  return (
    <div className="movie_detail_container">
      <div
        style={{
          backgroundImage: `url(${img_Base_Url}${bannerMovie?.backdrop_path})`,
          backgroundSize: "cover",
          borderRadius: "10px",
        }}
        className="background_image"
      >
        <img
          style={{ borderRadius: "10px", boxShadow: "0 0 10px black" }}
          width={"250px"}
          src={`${img_Base_Url}${bannerMovie?.poster_path}`}
          alt={bannerMovie?.title}
        />
      </div>
      <br />
      <div className="title_rating">
        <h1 style={{ color: "white" }}>{movieTitle}</h1>
        <h3
          className={`${
            bannerMovie?.vote_average === 0 && bannerMovie?.vote_count === 0
              ? "no_release_date"
              : ""
          }`}
          style={{ color: "white" }}
        >
          {releaseDates()}
        </h3>
        {noRating}
        <span
          className={`${getRating(
            bannerMovie?.vote_average
          )} ${comingSoon} tag`}
        >
          {movieRating}
        </span>
      </div>
      {directorName}
      <br />
      <p className="overview" style={{ color: "white" }}>
        {bannerMovie?.overview}
      </p>
      <br />
      <div className={`actors_container ${lessActors}`}>{actorSection}</div>
      <br />
    </div>
  );
};

export default Banner;
