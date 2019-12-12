import { place } from '../todomvc/lib/state-ui-lib';

function render(component) {
  const root = document.createElement('div');
  root.id = 'test-root-id';
  document.body.appendChild(root);

  place(component, root);
  return root;
}

function cleanup() {
  const root = document.querySelector('#test-root-id');
  if (!root) {
    return;
  }
  const { parentNode } = root;
  parentNode.removeChild(root);
}

export { render, cleanup };
