import todoReducer, {
  addTodo,
  toggleTodo,
  clearCompleted,
  setTodoVisibility,
} from './todoSlice';
import { TodoState } from './todoSlice.types';

test('should handle initial state', () => {
  expect(todoReducer(undefined, { type: '' })).toEqual({
    todos: [],
    currentFilter: 'all',
  });
});

test('should handle adding a todo', () => {
  const previousState: TodoState = { todos: [], currentFilter: 'all' };
  const newState = todoReducer(previousState, addTodo('New Task'));
  expect(newState.todos.length).toBe(1);
  expect(newState.todos[0].text).toBe('New Task');
  expect(newState.todos[0].isHide).toBe(false);
});

test('should handle toggling a todo', () => {
  const previousState: TodoState = {
    todos: [{ id: '1', text: 'Task', completed: false, isHide: false }],
    currentFilter: 'all',
  };
  const newState = todoReducer(previousState, toggleTodo('1'));
  expect(newState.todos[0].completed).toBe(true);
});

test('should handle clearing completed todos', () => {
  const previousState: TodoState = {
    todos: [
      { id: '1', text: 'Task 1', completed: true, isHide: false },
      { id: '2', text: 'Task 2', completed: false, isHide: false },
      { id: '3', text: 'Task 3', completed: true, isHide: false },
      { id: '4', text: 'Task 4', completed: false, isHide: false },
    ],
    currentFilter: 'all',
  };
  const newState = todoReducer(previousState, clearCompleted());
  expect(newState.todos.length).toBe(2);
  expect(newState.todos[0].text).toBe('Task 2');
  expect(newState.todos[1].text).toBe('Task 4');
});

describe('setTodoVisibility', () => {
  let initialState: TodoState;

  beforeEach(() => {
    initialState = {
      todos: [],
      currentFilter: 'all',
    };
  });

  test('should set currentFilter to active', () => {
    const newState = todoReducer(initialState, setTodoVisibility('active'));

    expect(newState.currentFilter).toBe('active');
  });

  test('should set currentFilter to completed', () => {
    const newState = todoReducer(initialState, setTodoVisibility('completed'));

    expect(newState.currentFilter).toBe('completed');
  });

  test('should set currentFilter to all', () => {
    const newState = todoReducer(initialState, setTodoVisibility('all'));

    expect(newState.currentFilter).toBe('all');
  });

  test('should update isHide for todos when filter is set to active', () => {
    initialState.todos = [
      { id: '1', text: 'Task 1', completed: false, isHide: false },
      { id: '2', text: 'Task 2', completed: true, isHide: false },
    ];

    const newState = todoReducer(initialState, setTodoVisibility('active'));

    expect(newState.todos[0].isHide).toBe(false);
    expect(newState.todos[1].isHide).toBe(true);
  });

  test('should update isHide for todos when filter is set to completed', () => {
    initialState.todos = [
      { id: '1', text: 'Task 1', completed: false, isHide: false },
      { id: '2', text: 'Task 2', completed: true, isHide: false },
    ];

    const newState = todoReducer(initialState, setTodoVisibility('completed'));

    expect(newState.todos[0].isHide).toBe(true);
    expect(newState.todos[1].isHide).toBe(false);
  });

  test('should update isHide for todos when filter is set to all', () => {
    initialState.todos = [
      { id: '1', text: 'Task 1', completed: false, isHide: false },
      { id: '2', text: 'Task 2', completed: true, isHide: false },
    ];

    const newState = todoReducer(initialState, setTodoVisibility('all'));

    expect(newState.todos[0].isHide).toBe(false);
    expect(newState.todos[1].isHide).toBe(false);
  });
});
