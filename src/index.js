import React from 'react';
/* The following line can be included in your src/index.js or App.js file*/

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import './fonts/ZillaSlab-Regular.ttf';
import './fonts/ZillaSlab-Bold.ttf';
import './fonts/ZillaSlab-SemiBold.ttf';
import './fonts/ZillaSlab-Medium.ttf';
import './fonts/ZillaSlab-Light.ttf';
import './fonts/ZillaSlab-LightItalic.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
