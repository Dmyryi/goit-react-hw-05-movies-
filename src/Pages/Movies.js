import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || ''; // Set to an empty string if null
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b7d3d78da112d71a39b066cbc166d0c0&query=${search}`
      )
      .then((res) => setMovies(res.data.results));
  }, [search]);

  return (
    <>
     <div>Movies</div>
      <input
        type="text"
        value={search}
        onChange={(evt) => setSearchParams({ search: evt.target.value })}
      />
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
