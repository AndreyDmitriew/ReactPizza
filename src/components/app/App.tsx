import React from 'react';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import { PrivateRoutes, PublicRoutes } from '../../router/Router';

import './App.scss';

function App() {
  const login: boolean = true;
  return (
    <section className="wrapper">
      {/*{login ? <PrivateRoutes /> : <PublicRoutes />}*/}

      <Header />
      <Main />
    </section>
  );
}

export default App;
