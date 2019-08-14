'use strict';

const { createStore, register } = require('../lib/state-manager');
const Main = require('./Main');
const { app: reducer } = require('../reducers');
const { controllersFactory } = require('../controllers');

const App = function App({ initialState, callback }) {
    // Returns a store with a dispatch function to
    // trigger state changes by dispatching actions.
    const store = createStore(initialState, reducer);

    const {
        onTodoClick,
        onRemoveClick,
        onAddButtonClick
    } = controllersFactory(store);

    function view(state) {
        return Main({
            todos: state.todos,
            onTodoClick,
            onRemoveClick,
            onAddButtonClick
        });
    }

    // In order to make a component stateful, we must
    // register the rendering function (view) with the store.
    const component = register({
        view,
        store,
        callback
    });

    // All component functions (stateless or stateful)
    // must return the root component node
    return component;
}

module.exports = App;
