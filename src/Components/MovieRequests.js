export const API_KEY = "83ac8bb4583fd137050ecfe93cac4232";

const MovieGenres = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchHBO: `/discover/tv?api_key=${API_KEY}&with_networks=49`,
  fetchCredits: `/credits?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchWeekTrending: `/trending/movie/week?api_key=${API_KEY} `,
  fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
};

export default MovieGenres;
