import React from 'react';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import { OrderCartPage } from '../../pages/OrderCartPage';
import { PrivateRoutes, PublicRoutes } from '../../router/Router';

import {Routes, Route, Link} from "react-router-dom";

import './App.scss';
import {main, summary} from "../../router/Routes";

function App() {
  const login: boolean = true;
  return (
    <section className="wrapper">
      {/*{login ? <PrivateRoutes /> : <PublicRoutes />}*/}

      {/*<Header navPanel />*/}
      {/*<Main />*/}

      {/*<OrderCartPage/>*/}

      <PrivateRoutes/>


    </section>
  );
}

export default App;
