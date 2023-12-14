// Cast.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const results = await getMovieCast(movieId);
        setCasts(results);
        console.log(results)
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts.length > 0 ? (
          casts.map((cast, index) => (  
            <li key={index}>
              <img
                src={cast.profile_path ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}` : 'https://via.placeholder.com/200x300?text=Unknown+Avatar'}
                alt={cast.name}
              />
              <p>
                {cast.original_name} - {cast.character}
              </p>
            </li>
          ))
        ) : (
          <div>No cast information available</div>
        )}
      </ul>
    </div>
  );
};

export default Cast;
