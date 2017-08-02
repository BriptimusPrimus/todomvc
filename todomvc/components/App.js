'use strict';

// <div id="app">
//     <Todos 
//         todos: [{}, {}, {}]
//     />
// </div>

var $$$ = require('../lib/state-manager');
var Todos = require('./Todos');
var AddArea = require('./AddArea');
var reducer = require('../reducers').app;
var actions = require('../actions');

var App = function App(props) {
    var d = $$$.dom;
    var count = 0;
    var component;
    var store;

    function onTodoClick(id, event) {
        return;
    }

    function onRemoveClick(id, event) {
        if (!id) {
            return;
        }

        store.dispatch(actions.removeTodo(id), true);
    }

    function onAddButtonClick(text, event) {
        if (!text) {
            return;
        }
        
        store.dispatch(actions.addTodo({
            id: ++count,
            text: text
        }), true);
    }

    function mapStateToProps(state) {
        return {
            todos: state.todos,
            onTodoClick: onTodoClick,
            onRemoveClick: onRemoveClick
        }
    }

    function view(state) {
        return d('div', {
                id: 'app',
                style: 'margin: 100px 10px 50px 50px;'
            }, [
                Todos(mapStateToProps(state)),
                AddArea({
                    onAddButtonClick: onAddButtonClick
                })
            ]
        );
    }

    // Use initial state when rendering component for the first time
    component = view(props.initialState);

    // In order to make a component stateful, we must
    // register the root node and the rendering function.
    // Note: registering a reducer is optional.
    // Register returns a store with a dispatch function to
    // trigger state changes by dispatching actions.
    store = $$$.register({
        component: component,
        view: view,
        state: props.initialState,
        reducer: reducer
    });

    // All component functions (stateless or stateful)
    // must return the root component node
    return component;
}

module.exports = App;