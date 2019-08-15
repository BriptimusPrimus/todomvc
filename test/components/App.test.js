const App = require('../../todomvc/components/App');

describe('App test', () => {
  let mockProps = {};

  beforeEach(() => {
    mockProps = {
      initialState: {
        todos: [
          {
            id: 101,
            text: 'lint with eslint',
            done: true
          },
          {
            id: 102,
            text: 'format with prettier',
            done: true
          },
          {
            id: 103,
            text: 'test with jest',
            done: false
          },
          {
            id: 104,
            text: 'hook with huskey and lint-staged',
            done: false
          }
        ],
        filer: 'all'
      },
      callback: () => {}
    };
  });

  test('Should render', () => {
    const component = App(mockProps);
    expect(component).toMatchSnapshot();
  });
});
