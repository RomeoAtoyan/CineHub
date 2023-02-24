export const API_KEY = "83ac8bb4583fd137050ecfe93cac4232";
const BASE_URL = "https://api.themoviedb.org/3";

const TVGenres = {
  fetchTVCredits: `/credits?api_key=${API_KEY}&language=en-US`,
  fetchTVBest: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTVPopular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTVOnAir: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
};

export default TVGenres;
