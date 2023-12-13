import { Routes, Route } from 'react-router-dom';

import Cast from '../Pages/Cast';
import { Layout } from './Layout';
import Reviews from 'Pages/Reviews';

import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MoviesDetail = lazy(() => import('../Pages/MoviesDetail'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MoviesDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
