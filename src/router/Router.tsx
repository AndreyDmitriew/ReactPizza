import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Homepage} from '../pages/Homepage';
import {main, summary} from '../router/Routes'

export const PublicRoutes = () => <Routes></Routes>;

export const PrivateRoutes = () => (
    <Routes>
        <Route key={main.path} path={main.path} element={main.element}/>
        <Route key={summary.path} path={summary.path} element={summary.element}/>
    </Routes>
);
