import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const quantity = 315;

root.render(
  <React.StrictMode>
    <App quantity={quantity} offers={offers} reviews={reviews}/>
  </React.StrictMode>
);
