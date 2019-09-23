// eslint-disable-next-line no-unused-vars
import style from '../src/main.css';
import { place } from './lib/state-ui-lib';
import App from './jsx-components/App';

const initialState = {
  todos: [
    {
      id: 100,
      text: 'es6 rewrite',
      done: true
    },
    {
      id: 101,
      text: 'lint with eslint',
      done: true
    },
    {
      id: 102,
      text: 'format with prettier',
      done: true
    },
    {
      id: 103,
      text: 'test with jest',
      done: true
    },
    {
      id: 104,
      text: 'hook with huskey and lint-staged',
      done: true
    },
    {
      id: 105,
      text: 'improve state-manager lib',
      done: true
    },
    {
      id: 106,
      text: 'build with webpack',
      done: true
    },
    {
      id: 107,
      text: 'clean up',
      done: true
    },
    {
      id: 108,
      text: 'write tic tac toe app',
      done: true
    },
    {
      id: 109,
      text: 'transpile jsx',
      done: false
    }
  ],
  filer: 'all'
};

function domReady() {
  const inputEl = document.querySelector('#todo-description');
  if (inputEl) {
    inputEl.value = '';
    inputEl.focus();
  }
}

const root = document.getElementById('root');

place(
  App({
    initialState,
    callback: domReady
  }),
  root
);

domReady();
