import styled from '@emotion/styled';

export const TaskListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
