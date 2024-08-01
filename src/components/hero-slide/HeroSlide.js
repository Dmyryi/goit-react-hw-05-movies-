import React, { useState, useEffect, useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';
import Modal, { ModalContent } from '../../components/modal/Modal';
import './hero-slide.scss';
import { apiConfig } from '../../api/api'; // Corrected import path
import Button, { OutlineButton } from 'components/button/Button';

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
        console.log(response);
      } catch {
        console.log('ERROR');
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        autoplay={{
          delay: 10500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = props => {
  const navigate = useNavigate(); // Replaced useHistory with useNavigate
  const item = props.item;

  const background = apiConfig.ORIGIN_IMG(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    console.log(videos.results);
    if (videos.results.length > 0) {
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal
        .querySelector('.modal__content > iframe')
        .setAttribute('src', videoSrc);
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer';
    }
    modal.classList.toggle('active');
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate('/movie/' + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.W500_IMG(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = props => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');
  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
