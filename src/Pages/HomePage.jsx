import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Middle from "../Components/Middle/Middle";
import Search from "../Components/Search/Search";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Action");
  const [bannerMovie, setBannerMovie] = useState(null);
  const [actors, setActors] = useState(null);
  const [director, setDirector] = useState(null);

  const [myMovies, setMyMovies] = useState([]);
  const userId = "4066df05eb71488daa4741c2f57bdf4d";
  const apiKey = "d2d8d7d05a3f4e578c8e672bf7429c81";

  useEffect(() => {
    const fetchLatestItems = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.35:8096/Users/${userId}/Items/Latest`,
          {
            headers: {
              "X-Emby-Token": apiKey,
            },
          }
        );
        const data = await response.json();
        setMyMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching latest items:", error);
      }
    };

    fetchLatestItems();
  }, [userId, apiKey]);

  return (
    <div className="page_layout">
      <Navbar
        setBannerMovie={setBannerMovie}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        myMovies={myMovies}
      />
      <Middle
        bannerMovie={bannerMovie}
        setBannerMovie={setBannerMovie}
        selectedCategory={selectedCategory}
        setDirector={setDirector}
        director={director}
        actors={actors}
        setActors={setActors}
        myMovies={myMovies}
        setMyMovies={setMyMovies}
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
