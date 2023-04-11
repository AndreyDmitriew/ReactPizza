import React from 'react';

import { PrivateRoutes, PublicRoutes } from '../../router/Router';

import './App.scss';

function App() {
  const login: boolean = true;
  return (
    <section className="wrapper">
      {/*{login ? <PrivateRoutes /> : <PublicRoutes />}*/}

      <PrivateRoutes />
    </section>
  );
}

export default App;
