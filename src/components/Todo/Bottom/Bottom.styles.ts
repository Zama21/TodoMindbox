import styled from '@emotion/styled';

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: #888888;
  font-size: 10px;
`;

export const StyledButton = styled.button`
  transition: color 0.5s ease-out;
  padding: 4px;
  &:hover,
  &:focus-visible {
    color: black;
  }
`;
