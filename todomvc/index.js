'use strict';

var $$$ = require('./lib/state-manager');
var App = require('./components/App');

var initialState = {
    todos: [],
    filer: 'all'
};

var root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

$$$.place(
    App({
        initialState: initialState,
        callback: domReady
    }),
    root
);

domReady();

function domReady() {
    var inputEl = document.querySelector('#todo-description');
    if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
    }
}

