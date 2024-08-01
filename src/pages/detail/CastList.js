import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import { apiConfig } from '../../api/api';

export const CastList = props => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.W500_IMG(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
