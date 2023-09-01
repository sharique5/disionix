import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/spacing.min.css';
import './assets/css/menu.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
