import React from 'react';

import { PrivateRoutes, PublicRoutes } from '../../router/Router';

import './App.scss';

function App() {
  {
    /*uncomment when logIn logic be exist*/
  }
  // const login: boolean = true;
  return (
    <section className="wrapper">
      {/*uncomment when logIn logic be exist*/}
      {/*{login ? <PrivateRoutes /> : <PublicRoutes />}*/}

      <PrivateRoutes />
    </section>
  );
}

export default App;
