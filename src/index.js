import React from 'react';
import ReactDOM from 'react-dom/client';
import { isMobile } from 'react-device-detect';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App isMobile={isMobile} />
    </Router>
  </React.StrictMode>
);
