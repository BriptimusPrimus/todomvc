'use strict';

// <div id="app">
//     <Todos 
//         todos: [{}, {}, {}]
//     />
// </div>

var { dom: d } = require('../lib/state-manager');
var Todos = require('./Todos');
var AddArea = require('./AddArea');

function Main({
    todos,
    onTodoClick,
    onRemoveClick,
    onAddButtonClick
}) {
    return d('div', {
            id: 'main',
            style: 'margin: 100px 10px 50px 50px;'
        }, [
            Todos({
                todos,
                onTodoClick,
                onRemoveClick                    
            }),
            AddArea({
                onAddButtonClick
            })
        ]
    );        
}

module.exports = Main;
