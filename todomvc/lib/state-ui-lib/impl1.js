import storeFactory from './store';

function resolveStyle(style) {
  return Object.keys(style)
    .map(key => `${key}:${style[key]};`)
    .join('');
}

function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

function dom(element, props = {}, ...children) {
  // Element is a function, then it is a component
  if (typeof element === 'function') {
    return element(props);
  }

  // Create new DOM element
  const newEl = document.createElement(element);

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

export { dom, place, createStore, register };