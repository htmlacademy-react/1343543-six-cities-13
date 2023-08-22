import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchOffersAction, checkAuthAction, sendAuthorizationAction } from './store/api-actions';

// store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

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
