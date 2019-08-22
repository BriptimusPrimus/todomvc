const { storeFactory } = require('./store');

function resolveStyle(style) {
  return Object.keys(style)
    .map(key => `${key}:${style[key]};`)
    .join('');
}

function dom(element, attributes = {}, children) {
  // Create new DOM element
  const newEl = document.createElement(element);

  // Set element attributes
  Object.keys(attributes)
    .filter(item => {
      return item !== 'on' && item !== 'style';
    })
    .forEach(key => {
      newEl.setAttribute(key, attributes[key]);
    });

  // Set style
  if (attributes.style !== undefined && attributes.style !== null) {
    newEl.setAttribute('style', resolveStyle(attributes.style));
  }

  // Bind events
  const events = attributes.on || {};
  Object.keys(events).forEach(evt => {
    newEl.addEventListener(evt, events[evt]);
  });

  // Set children
  // children is a string, append text to element:
  if (typeof children === 'string') {
    newEl.textContent = children;
    // children is an array of DOM elements, append children to element:
  } else if (Array.isArray(children)) {
    children.forEach(child => {
      newEl.appendChild(child);
    });

    // children is not a string nor an array, do nothing
  } else if (children) {
    // eslint-disable-next-line no-console
    console.warn('children is not text nor is a list of elements');
  }

  return newEl;
}

function place(el, container) {
  if (!container || !el) {
    return;
  }
  // eslint-disable-next-line no-param-reassign
  container.innerHtml = '';
  container.appendChild(el);
}

function createStore(state = {}, reducer) {
  return storeFactory(state, reducer);
}

function register({ view, store, callback }) {
  if (!view || !store) {
    return undefined;
  }
  // Use initial state when rendering component for the first time
  let component = view(store.getState());

  function render(newState) {
    // Create new version of the component using new state
    const newComponent = view(newState);

    // Replace old version with new version
    const { parentNode } = component;
    parentNode.replaceChild(newComponent, component);

    // Hold currently active node for the next time
    component = newComponent;

    // Execute callback if any
    if (callback) {
      callback();
    }
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
