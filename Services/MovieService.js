import axios from "axios";

const key = "522d421671cf75c2cba341597d86403a"

const serviceInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  Headers: { Accept: "application/json" },
  timeout: 10000
});

export default {
  getPopularMovies() {
    return serviceInstance.get(`/movie/popular?api_key=${key}`);
  },
  getTrendingMovies() {
    return serviceInstance.get(`/trending/movie/week?api_key=${key}`);
  },
  getTopMovies() {
    return serviceInstance.get(`/movie/top_rated?api_key=${key}`);
  }
};
