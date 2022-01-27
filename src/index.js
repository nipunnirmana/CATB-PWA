import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Login from './Components/Login/Login';
import Store from './Store/MyStore';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Login />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
