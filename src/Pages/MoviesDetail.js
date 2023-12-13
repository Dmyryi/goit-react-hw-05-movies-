import axios from "axios";
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MoviesDetail = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b7d3d78da112d71a39b066cbc166d0c0`);
                setDetails(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchData(); // Call the async function

    }, [movieId]);

    return (
        <>
            <div>
                 {details.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`} alt={details.original_title} />
                )}
                <h3>{details.original_title}</h3>
                <p>Popularity: {details.popularity}%</p>
                <h4>Overview</h4>
                <p>{details.overview}</p>
                <h4>Genres</h4>
                <ul>
                    {details.genres?.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <nav>
                    <ul>
                        <li>
<Link to="cast">Cast</Link>
                        </li>
                        <li>
                               <Link to="reviews">Reviews</Link>
                        </li>
                    </ul>
                    
                 
                </nav>
                <Outlet movieId/>
                
               

                
              
            </div>
        </>
    );
};

export default MoviesDetail;
