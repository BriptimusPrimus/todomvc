const { place } = require('./lib/state-manager');
const App = require('./components/App');

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
      done: false
    },
    {
      id: 102,
      text: 'format with prettier',
      done: true
    },
    {
      id: 103,
      text: 'test with jest',
      done: false
    },
    {
      id: 104,
      text: 'hook with huskey and lint-staged',
      done: false
    },
    {
      id: 105,
      text: 'improve state-manager lib',
      done: false
    },
    {
      id: 106,
      text: 'build with webpack',
      done: false
    },
    {
      id: 107,
      text: 'write tic tac toe app',
      done: false
    },
    {
      id: 108,
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

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

place(
  App({
    initialState,
    callback: domReady
  }),
  root
);

domReady();
