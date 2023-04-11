import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { main, summary, empty } from '../router/Routes';

export const PublicRoutes = () => <Routes></Routes>;

export const PrivateRoutes = () => (
  <Routes>
    <Route key={main.path} path={main.path} element={main.element} />
    <Route key={summary.path} path={summary.path} element={summary.element} />
    <Route key={empty.path} path={empty.path} element={empty.element} />
  </Routes>
);
