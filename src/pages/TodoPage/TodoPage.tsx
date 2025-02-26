import { Todo } from '@/components';
import { MainTitle, MainWrapper, TodoWrapper } from './TodoPage.styles';

export const TodoPage = () => {
  return (
    <MainWrapper>
      <MainTitle>Todos</MainTitle>
      <TodoWrapper>
        <Todo />
      </TodoWrapper>
    </MainWrapper>
  );
};
