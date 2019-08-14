'use strict';

// This implementation relies on snabbdom virtual dom

// virtual dom library
var snabbdom = require('snabbdom');
var patch = snabbdom.init([
  // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default // attaches event listeners
]);
var h = require('snabbdom/h').default; // helper function for creating vnodes

var storeFactory = require('./store').storeFactory;

function dom(element, attributes, children) {
  var props = {};

  Object.keys(attributes)
    .filter(function(item) {
      return item !== 'on';
    })
    .forEach(function(key) {
      props[key] = attributes[key];
    });

  return h(
    element,
    {
      props: props,
      on: attributes.on
    },
    children
  );
}

function place(el, container) {
  return patch(container, el);
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
    oldComponent = patch(oldComponent, newComponent);

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
};
