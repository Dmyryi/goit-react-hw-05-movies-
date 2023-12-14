import axios from 'axios';

const API_KEY = 'b7d3d78da112d71a39b066cbc166d0c0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response;
    
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const results = response.data.results;

    // Ensure that results is an array
    if (Array.isArray(results)) {
      return results;
    } else {
      console.error('Invalid response format from the API:', results);
      return []; // Return an empty array to avoid the "map is not a function" error
    }
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};