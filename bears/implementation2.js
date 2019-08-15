function run() {
  var snabbdom = require('snabbdom');
  var patch = snabbdom.init([
    // Init patch function with chosen modules
    require('snabbdom/modules/class').default, // makes it easy to toggle classes
    require('snabbdom/modules/props').default, // for setting properties on DOM elements
    require('snabbdom/modules/style').default, // handles styling on elements with support for animations
    require('snabbdom/modules/eventlisteners').default // attaches event listeners
  ]);
  var h = require('snabbdom/h').default; // helper function for creating vnodes

  var rootNode = document.createElement('div');
  document.body.appendChild(rootNode);

  var data = ['grizzly', 'polar', 'brown', 'teddy'];

  function render(bears) {
    bears = bears.map(function(bear) {
      return h('li', bear);
    });

    bears.push(
      h('li', [
        h(
          'button',
          {
            on: {
              click: function(event) {
                data.push('new bear');
                update();
              }
            }
          },
          'add bear'
        )
      ])
    );
    return h('ul', bears);
  }

  var tree = render(data);
  rootNode = patch(rootNode, tree);

  function update() {
    var newTree = render(data);
    rootNode = patch(rootNode, newTree);
  }
}

module.exports = run;
