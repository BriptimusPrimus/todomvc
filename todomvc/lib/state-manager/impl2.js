/* eslint-disable global-require */
// This implementation relies on snabbdom virtual dom

// virtual dom library
const snabbdom = require('snabbdom');
const patch = snabbdom.init([
  // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default // attaches event listeners
]);
const h = require('snabbdom/h').default; // helper function for creating vnodes

const { storeFactory } = require('./store');

function dom(element, attributes, children) {
  const props = {};

  Object.keys(attributes)
    .filter(item => {
      return item !== 'on';
    })
    .forEach(key => {
      props[key] = attributes[key];
    });

  return h(
    element,
    {
      props,
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
    return undefined;
  }
  let oldComponent = options.component;
  const store = storeFactory(options.state, options.reducer);

  function render(newState) {
    // Create new version of the component using new state
    const newComponent = options.view(newState);

    // Replace old version with new version
    oldComponent = patch(oldComponent, newComponent);

    // Execute callback if any
    if (options.callback) {
      options.callback();
    }
  }

  store.subscribe(render);
  return store;
}

module.exports = {
  dom,
  place,
  register
};
