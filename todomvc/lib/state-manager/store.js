'use strict';

var pubsubFactory = require('./pubsub').pubsubFactory;

function storeFactory(state, reducer) {
    var _state = state || {};
    var pubsub = pubsubFactory();

    function subscribe(fn) {
        pubsub.subscribe('STATE_UPDATED', fn);
    }

    function dispatch(action, trigger) {
        var newState;

        // Reduce the state according to the action
        if (reducer) {
            newState = reducer(_state, action);
        // No reducer, merge old and new states
        } else {
            newState = Object.assign({}, _state, action.state);
        }
        _state = newState;
        
        // Avoid making DOM changes when trigger flag off
        if (trigger) {
            pubsub.publish('STATE_UPDATED', newState);
        }

        return newState;
    }

    function getState() {
        return _state;
    }

    return {
        subscribe: subscribe,
        dispatch: dispatch,
        getState: getState
    }    
}

module.exports = {
    storeFactory: storeFactory
};