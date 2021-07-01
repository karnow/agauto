import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import 'react-notifications/lib/notifications.css';
import App from 'views/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
