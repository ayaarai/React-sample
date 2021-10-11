import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import FormArea from './FormArea';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FormArea />
  </React.StrictMode>,
  document.getElementById('root'),
  document.getElementById('container'),
);

