import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Store from './Store/MyStore';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>,
  document.getElementById('root')
);
