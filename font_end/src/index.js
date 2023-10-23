import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
if (window.localStorage.getItem("token"))
  axios.defaults.headers.common['Authorization'] = "Bearer " + window.localStorage.getItem("token");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


