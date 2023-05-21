import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

import App from './components/app/App';
import storee from './store'

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={storee}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
