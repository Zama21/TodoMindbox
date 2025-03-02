import { BREAKPOINTS } from '@/constants/device';
import styled from '@emotion/styled';

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: #888888;

  @media (max-width: ${BREAKPOINTS.sm + 1}px) {
    font-size: 12px;
  }

  @media (min-width: ${BREAKPOINTS.sm}px) {
    padding: 16px;
  }
`;

export const StyledButton = styled.button`
  transition: color 0.5s ease-out;
  padding: 4px 0 4px 0;
  &:hover,
  &:focus-visible {
    color: black;
  }

  @media (min-width: ${BREAKPOINTS.sm}px) {
    padding: 4px;
  }
`;
