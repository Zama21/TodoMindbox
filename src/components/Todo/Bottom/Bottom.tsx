import { useDispatch, useSelector } from 'react-redux';
import { BottomWrapper, StyledButton } from './Bottom.styles';
import { FiltersBar } from './FiltersBar';
import { clearCompleted } from '@/store/slices/todoSlice';
import { RootState } from '@/store/store';

export const Bottom = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <BottomWrapper>
      <span>{`${todos.filter((todo) => !todo.completed).length} items left`}</span>
      <FiltersBar />
      <StyledButton onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </StyledButton>
    </BottomWrapper>
  );
};
