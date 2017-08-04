'use strict';

var storeFactory = require('./store').storeFactory;

function dom(element, attributes, children) {
    // Create new DOM element
    var newEl = document.createElement(element);
    var events;

    // Set element attributes
    attributes = attributes || {};
    Object.keys(attributes)
        .filter(function(item) {
            return item !== 'on'
        })
        .forEach(function(key) {
            newEl.setAttribute(key, attributes[key]);
        });

    // Bind events
    events = attributes.on || {};
    Object.keys(events)
        .forEach(function(evt) {
            newEl.addEventListener(evt, events[evt]);
        });

    // Set children
    // children is a string, append text to element:
    if (typeof children === 'string') {
        newEl.textContent = children;
        // children is an array of DOM elements, append children to element:
    } else if (children instanceof Array) {
        children.forEach(function(child) {
            child && newEl.appendChild(child);
        });

    // children is not a string nor an array, do nothing
    } else if (children) {
        console.warn('children is not text nor is a list of elements');
    }

    return newEl;    
}

function place(el, container) {
    if (!container || !el) {
        return;
    }
    container.innerHtml = '';
    container.appendChild(el);    
}

function register(options) {
    if (!options.component || !options.view) {
        return;
    }
    var oldComponent = options.component;
    var store = storeFactory(options.state, options.reducer);

    function render(newState) {
        // Create new version of the component using new state
        var newComponent = options.view(newState);

        // Replace old version with new version
        var parentNode = oldComponent.parentNode;
        parentNode.replaceChild(newComponent, oldComponent);

        // Hold currently active node for the next time
        oldComponent = newComponent;

        // Execute callback if any
        options.callback && options.callback();
    }

    store.subscribe(render);
    return store;    
}

module.exports = {
    dom: dom,
    place: place,
    register: register
}