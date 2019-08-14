const {
    toggleTodo,
    removeTodo,
    addTodo
} = require('../actions');

function controllersFactory(store) {
    let count = 0;
    const { dispatch } = store;

    function onTodoClick(id, event) {
        if (!id) {
            return;
        }

        dispatch(toggleTodo(id), true);
    }

    function onRemoveClick(id, event) {
        if (!id) {
            return;
        }

        dispatch(removeTodo(id), true);
    }

    function onAddButtonClick(text, event) {
        if (!text) {
            return;
        }
        
        dispatch(addTodo({
            id: ++count,
            text: text
        }), true);
    }

    return {
        onTodoClick,
        onRemoveClick,
        onAddButtonClick
    };
}

module.exports = {
    controllersFactory
};
