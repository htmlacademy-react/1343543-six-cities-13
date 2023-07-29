import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const quantity: number = 315;

root.render(
  <React.StrictMode>
    <App quantity={quantity}/>
  </React.StrictMode>
);
