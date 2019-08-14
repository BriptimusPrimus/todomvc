

const { storeFactory } = require('./store');

function dom(element, attributes, children) {
  // Create new DOM element
  const newEl = document.createElement(element);
  let events;

  // Set element attributes
  attributes = attributes || {};
  Object.keys(attributes)
    .filter(function(item) {
      return item !== 'on';
    })
    .forEach(function(key) {
      newEl.setAttribute(key, attributes[key]);
    });

  // Bind events
  events = attributes.on || {};
  Object.keys(events).forEach(function(evt) {
    newEl.addEventListener(evt, events[evt]);
  });

  // Set children
  // children is a string, append text to element:
  if (typeof children === 'string') {
    newEl.textContent = children;
    // children is an array of DOM elements, append children to element:
  } else if (Array.isArray(children)) {
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

function createStore(state = {}, reducer) {
  return storeFactory(state, reducer);
}

function register({ view, store, callback }) {
  if (!view || !store) {
    return;
  }
  // Use initial state when rendering component for the first time
  let component = view(store.getState());

  function render(newState) {
    // Create new version of the component using new state
    const newComponent = view(newState);

    // Replace old version with new version
    const {parentNode} = component;
    parentNode.replaceChild(newComponent, component);

    // Hold currently active node for the next time
    component = newComponent;

    // Execute callback if any
    callback && callback();
  }

  store.subscribe(render);
  return component;
}

module.exports = {
  dom,
  place,
  createStore,
  register
};
