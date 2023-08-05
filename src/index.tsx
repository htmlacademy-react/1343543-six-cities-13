import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const quantity = 315;

root.render(
  <React.StrictMode>
    <App quantity={quantity} offers={offers} />
  </React.StrictMode>
);
