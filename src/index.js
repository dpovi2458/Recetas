// index.js
import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);