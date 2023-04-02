import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';

export const PublicRoutes = () => <Routes></Routes>;

export const PrivateRoutes = () => (
  <Routes>
    <Route path="http://127.0.0.1:5173/" element={<Homepage />} />
    <Route path="/" element={<Homepage />} />
  </Routes>
);
