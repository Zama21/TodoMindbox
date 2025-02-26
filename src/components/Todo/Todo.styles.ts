import styled from '@emotion/styled';

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  background: #fefefe;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 8px;

  &::after,
  &::before {
    content: '';
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background-color: inherit;
    box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
    height: 4px;
  }

  &::after {
    width: 99%;
    bottom: -4px;
  }

  &::before {
    width: 98%;
    bottom: -8px;
  }
`;

export const TodoBody = styled.div<{ isOpen: boolean }>`
  display: grid;
  overflow: hidden;
  transition: grid-template-rows 0.5s ease;
  grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
`;
