const { place } = require('../todomvc/lib/state-manager');

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

module.exports = {
  render,
  cleanup
};
