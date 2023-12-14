import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/api';
import MovieList from '../components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? ''; // Set to an empty string if null
  const [movies, setMovies] = useState([]);

  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
       const fetchMovies = async () => {
      try {
        const results = await searchMovies(search);
        setMovies(results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, [search]);


const handleSubmit = (evt) => {
  evt.preventDefault();
  setSearchParams({ search: searchQuery });
};
  
  return (
    <>
      <div>Movies</div>
         <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};
export default Movies;