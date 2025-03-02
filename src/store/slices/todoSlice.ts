import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from './todoSlice.types';

export const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : { todos: [], currentFilter: 'all' };
};

export const saveTodos = (todos: TodoState) =>
  localStorage.setItem('todos', JSON.stringify(todos));

const initialState: TodoState = loadTodosFromLocalStorage();

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        isHide: state.currentFilter == 'completed',
      };
      state.todos.push(newTodo);
      saveTodos(state);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        if (state.currentFilter == 'completed' && !todo.completed)
          todo.isHide = true;
        else if (state.currentFilter == 'active' && todo.completed)
          todo.isHide = true;
      }
      saveTodos(state);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      saveTodos(state);
    },
    setTodoVisibility: (
      state,
      action: PayloadAction<'all' | 'active' | 'completed'>
    ) => {
      const filter = action.payload;
      state.currentFilter = filter;
      state.todos.forEach((todo) => {
        if (filter === 'all') {
          todo.isHide = false;
        } else if (filter === 'active') {
          todo.isHide = todo.completed;
        } else if (filter === 'completed') {
          todo.isHide = !todo.completed;
        }
      });
      saveTodos(state);
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, setTodoVisibility } =
  todoSlice.actions;
export default todoSlice.reducer;
