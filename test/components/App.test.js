import {
  getByText,
  getByLabelText,
  queryByText,
  getByTestId
} from '@testing-library/dom';

import App from '../../todomvc/components/App';
import { render, cleanup } from '../utils';

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

  afterEach(cleanup);

  test('Should render', () => {
    const container = render(App(mockProps));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Add todo', () => {
    const container = render(App(mockProps));
    const newTodo = 'build with webpack';

    const input = getByLabelText(container, 'Task:');
    input.value = newTodo;
    getByText(container, 'Add Todo').click();

    expect(getByText(container, newTodo)).toBeTruthy();
  });

  test('Clik add button without any text', () => {
    const container = render(App(mockProps));

    const todos = container.querySelectorAll('#main ul li');
    getByText(container, 'Add Todo').click();

    // The number of todos is still the same
    expect(container.querySelectorAll('#main ul li').length).toEqual(
      todos.length
    );
  });

  test('Toggle todo', () => {
    let todoItem;
    const container = render(App(mockProps));

    todoItem = getByText(container, 'test with jest');
    expect(todoItem.style.cssText).toEqual('');

    todoItem.click();
    todoItem = getByText(container, 'test with jest');
    expect(todoItem.style.cssText).toEqual('text-decoration: line-through;');
  });

  test('Remove todo', () => {
    const container = render(App(mockProps));

    const todo = mockProps.initialState.todos[0];
    expect(queryByText(container, todo.text)).toBeTruthy();

    const removeLink = getByTestId(container, `remove-${todo.id}`);
    removeLink.click();
    expect(queryByText(container, todo.text)).toBeNull();
  });
});
