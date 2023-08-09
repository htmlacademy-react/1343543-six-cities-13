import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store/store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const quantity = 315;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App quantity={quantity} offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>
);
