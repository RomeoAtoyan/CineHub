import React from "react";
import "./Middle.css";
import Media from "../Media/Media";
import Banner from "../Banner/Banner";

const Middle = ({
  actors,
  director,
  setDirector,
  setActors,
  bannerMovie,
  setBannerMovie,
  selectedCategory,
  downloads,
  setDownloads
}) => {
  return (
    <div className="middle_container">
      <Banner
        bannerMovie={bannerMovie}
        setBannerMovie={setBannerMovie}
        actors={actors}
        setActors={setActors}
        setDirector={setDirector}
        director={director}
        setDownloads={setDownloads}
        downloads={downloads}
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
