import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// No usage of PUBLIC_URL here. If you plan to use assets, use process.env.PUBLIC_URL (e.g., process.env.PUBLIC_URL + '/path/to/asset').

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
