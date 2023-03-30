import React from 'react';
import { Header } from '../header/Header';
import { Main } from '../main/Main';

import './App.scss';

function App() {
  return (
    <section className="wrapper">
      <form onSubmit={(value) => console.log(value, 'Submit')}>
        <Header />
        <Main />
      </form>
    </section>
  );
}

export default App;
