import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
import 'react-notifications/lib/notifications.css';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
