import storeFactory from './store';

import { resolveStyle, flattenArray } from './helpers';

function dom(elType, props = {}, ...children) {
  // Element type is a function, then it is a component
  if (typeof elType === 'function') {
    return elType(props, children);
  }

  // Create new DOM element
  const newEl = document.createElement(elType);

  // Set element attributes
  const attributes = props || {};
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

  // Append children
  flattenArray(children)
    .map(child =>
      typeof child === 'string' || typeof child === 'number'
        ? document.createTextNode(child)
        : child
    )
    .forEach(child => {
      if (child !== undefined && child !== null) {
        newEl.appendChild(child);
      }
    });

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

function useReducer({ initialState, reducer, callback }) {
  if (!initialState || !reducer) {
    return undefined;
  }

  let node;

  function createRender(view) {
    return function render(newState) {
      // Create new version of the node using new state
      const newNode = view(newState);

      // Replace old version with new version
      const { parentNode } = node;
      parentNode.replaceChild(newNode, node);

      // Hold currently active node for the next time
      node = newNode;

      // Execute callback if any
      if (callback) {
        callback();
      }
    };
  }

  // Create a store with a dispatch function to
  // trigger state changes by dispatching actions.
  const store = createStore(initialState, reducer);

  function createNode(viewFn) {
    // Use initial state when rendering component for the first time
    node = viewFn(store.getState());
    const renderSnapshot = createRender(viewFn);
    store.subscribe(renderSnapshot);
    return node;
  }

  return [createNode, store.dispatch];
}

export { dom, place, useReducer };
