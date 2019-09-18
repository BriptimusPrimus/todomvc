/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// tutorial: https://www.valentinog.com/blog/webpack/

// Replace ### + jsx with @ + jsx to render with React
/** ###jsx React.createElement */
import React from 'react';
import ReactDOM from 'react-dom';

import { dom, place } from '../todomvc/lib/state-manager/impl1';

import style from './main.css';
import App from './App';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

// Toggle next two lines to use React or /lib/state-manager
// ReactDOM.render(<App />, document.getElementById('root'));
place(App(), document.getElementById('root'));
