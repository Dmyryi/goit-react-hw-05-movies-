import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b7d3d78da112d71a39b066cbc166d0c0`
    )
    .then((res)=>setReviews(res.data.results))
 
      
    },[movieId]);

  return (
    <div>
      <ul>
              {reviews.map((review) => (
                  <li>
                      <h4>Author: {review.author}</h4>
                      <p>{review.content}</p>
                   </li>
       
          
      ))}
          </ul>
         
     
    </div>
  );
};

export default Reviews;