import React, { Suspense } from 'react';
import '../../node_modules/swiper/swiper.min.css';
import '../assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './header/Header';
import Footer from './footer/Footer';
import AppRoutes from '../config/Routes'; // Adjusted import to match the component name

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
};
