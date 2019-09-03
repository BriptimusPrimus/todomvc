/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// tutorial: https://www.valentinog.com/blog/webpack/
import React from 'react';
import ReactDOM from 'react-dom';

import style from './main.css';
import App from './App';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

ReactDOM.render(<App />, document.getElementById('app'));
