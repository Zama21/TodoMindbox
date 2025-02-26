import styled from '@emotion/styled';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import { BaseInput } from '@/shared';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  color: #e6e6e6;
  gap: 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  transition: color 0.5s ease-out;

  &:hover,
  &:focus-visible {
    color: #868686;
  }
`;

export const StyledArrowDownIcon = styled(ArrowDownIcon)`
  height: 24px;
`;

export const StyledBaseInput = styled(BaseInput)`
  height: 24px;
  border: none;
  color: black;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }
`;
