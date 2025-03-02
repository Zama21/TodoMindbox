import styled from '@emotion/styled';
import ArrowDownIcon from '@/assets/icons/arrowDown.svg?react';
import { BaseInput } from '@/shared';
import { BREAKPOINTS } from '@/constants/device';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  color: #e6e6e6;
  gap: 8px;
  height: 48px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    height: 64px;
  }
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
  height: 32px;

  @media (min-width: ${BREAKPOINTS.md}px) {
    height: 48px;
  }
`;

export const StyledBaseInput = styled(BaseInput)`
  min-height: 24px;
  border: none;
  color: black;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }
`;
