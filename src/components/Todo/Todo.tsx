import { useState } from 'react';
import { Bottom } from './Bottom';
import { Header } from './Header';
import { TaskList } from './TaskList';
import { TodoBody, TodoWrapper } from './Todo.styles';

export const Todo = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTodoBody = () => setIsOpen((prev) => !prev);

  return (
    <TodoWrapper>
      <Header onToggle={toggleTodoBody} onOpen={() => setIsOpen(true)} />
      <TodoBody isOpen={isOpen}>
        <div style={{ minHeight: 0, overflow: 'hidden' }}>
          <TaskList />
          <Bottom />
        </div>
      </TodoBody>
    </TodoWrapper>
  );
};
