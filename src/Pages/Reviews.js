// Reviews.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const results = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
