import { useEffect, useState } from "react";
import { getTrendingMovies } from "api/api";
import MovieList from "../components/MoviesList";

const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, []);

    return (
        <>
            <div>Home</div>
            <ul>
                <MovieList movies={movies} />
            </ul>
        </>
    );
};

export default Home;
