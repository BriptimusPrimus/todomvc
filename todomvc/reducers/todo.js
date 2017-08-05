'use strict';

var actions = require('../actions');

function iteration(state, action) {
    switch (action.type) {
        case actions.ITERATE_TODO:
            return state >= 7 ? 0 : state + 1;
        default:
            return state;
    }
}

function todo(state, action) {
    return {
        iteration: iteration(state.iteration, action)
    }
}

module.exports = todo;