export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isHide: boolean;
}

export type TypeFilters = 'all' | 'active' | 'completed';

export interface TodoState {
  todos: Todo[];
  currentFilter: TypeFilters;
}
