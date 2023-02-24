import React, { useState } from "react";
import "./Middle.css";
import Media from "../Media/Media";
import MovieGenres from "../MovieRequests";
import Banner from "../Banner/Banner";

const Middle = ({
  actors,
  director,
  setDirector,
  setActors,
  bannerMovie,
  setBannerMovie,
  selectedCategory,
}) => {
  return (
    <div className="middle_container">
      <Banner
        selectedCategory={selectedCategory}
        bannerMovie={bannerMovie}
        setBannerMovie={setBannerMovie}
        actors={actors}
        setActors={setActors}
        setDirector={setDirector}
        director={director}
      />
      <Media
        director={director}
        setDirector={setDirector}
        actors={actors}
        setActors={setActors}
        selectedCategory={selectedCategory}
        setBannerMovie={setBannerMovie}
      />
    </div>
  );
};

export default Middle;
