import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store/store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
