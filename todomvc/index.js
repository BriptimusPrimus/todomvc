'use strict';

var $$$ = require('./lib/state-manager');
var App = require('./components/App');

var initialState = {
    todos: [
        {
            id: 1, 
            text: 'do one',
            done: false
        }, {
            id: 2,
            text: 'do two',
            done: false
        }, {
            id: 3,
            text: 'do three',
            done: false
        }
    ],
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
    inputEl && inputEl.focus();
}

