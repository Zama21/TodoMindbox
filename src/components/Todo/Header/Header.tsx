import { useState } from 'react';
import {
  StyledArrowDownIcon,
  StyledBaseInput,
  StyledButton,
  Wrapper,
} from './Header.styles';
import { HeaderProps } from './Header.types';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/slices/todoSlice';

export const Header = ({ onToggle, onOpen }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
      onOpen();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setInputValue(event.currentTarget.value);
      handleAddTodo();
    }
  };

  return (
    <Wrapper>
      <StyledButton
        onClick={() => {
          onToggle();
        }}
      >
        <StyledArrowDownIcon />
      </StyledButton>

      <StyledBaseInput
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </Wrapper>
  );
};
