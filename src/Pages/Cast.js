import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b7d3d78da112d71a39b066cbc166d0c0`
        );
        setCasts(response.data.cast); // Assuming 'cast' is the property containing the cast details in the API response
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
      <div>
          <ul>
              {casts.map((cast) => (
                  <li>
                       <img
          key={cast.id}
          src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
          alt={cast.name}
                      />
                      <p>{cast.original_name} - {cast.character}</p>
                   </li>
       
          
      ))}
          </ul>
     
    </div>
  );
};

export default Cast;