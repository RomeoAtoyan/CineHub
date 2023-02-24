import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Middle from "../Components/Middle/Middle";
import Search from "../Components/Search/Search";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Action");
  const [bannerMovie, setBannerMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [director, setDirector] = useState(null);

  return (
    <div className="page_layout">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Middle
        bannerMovie={bannerMovie}
        setBannerMovie={setBannerMovie}
        selectedCategory={selectedCategory}
        setDirector={setDirector}
        director={director}
        actors={actors}
        setActors={setActors}
      />
      <Search
        actors={actors}
        setActors={setActors}
        bannerMovie={bannerMovie}
        setBannerMovie={setBannerMovie}
      />
    </div>
  );
};

export default HomePage;
