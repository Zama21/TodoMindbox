import { useSelector } from 'react-redux';
import { TaskItem } from './TaskItem';
import { TaskListWrapper } from './TaskList.styles';
import { RootState } from '@/store/store';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createRef, useRef } from 'react';

export const TaskList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const nodeRefs = useRef<{
    [key: string]: React.RefObject<HTMLLIElement | null>;
  }>({});

  return (
    <TaskListWrapper>
      <TransitionGroup>
        {todos
          .filter((task) => !task.isHide)
          .map((task) => {
            if (!nodeRefs.current[task.id]) {
              nodeRefs.current[task.id] = createRef<HTMLLIElement>();
            }

            return (
              <CSSTransition
                key={task.id}
                timeout={500}
                classNames="fade"
                nodeRef={nodeRefs.current[task.id]}
              >
                <TaskItem task={task} ref={nodeRefs.current[task.id]} />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </TaskListWrapper>
  );
};
