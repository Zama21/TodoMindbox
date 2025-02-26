import { useDispatch } from 'react-redux';
import {
  StyledBaseCheckbox,
  StylesSpan,
  TaskItemWrapper,
} from './TaskItem.styles';
import { TaskItemProps } from './TaskItem.types';
import { forwardRef, useState } from 'react';
import { toggleTodo } from '@/store/slices/todoSlice';

export const TaskItem = forwardRef<HTMLLIElement, TaskItemProps>(
  ({ task }, ref) => {
    const [isChecked, setIsChecked] = useState(task.completed);
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
      setIsChecked((prev) => !prev);
      dispatch(toggleTodo(task.id));
    };

    return (
      <TaskItemWrapper ref={ref}>
        <div style={{ minHeight: 0 }}>
          <StyledBaseCheckbox
            checked={isChecked}
            onChange={handleCheckboxChange}
          >
            <StylesSpan checked={isChecked}>{task.text}</StylesSpan>
          </StyledBaseCheckbox>
        </div>
      </TaskItemWrapper>
    );
  }
);
