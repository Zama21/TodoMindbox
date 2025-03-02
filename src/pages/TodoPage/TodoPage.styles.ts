import { BREAKPOINTS } from '@/constants/device';
import styled from '@emotion/styled';

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-size: 64px;
  color: #e9d9d8;
  text-align: center;
  padding: 16px;

  @media (min-width: ${BREAKPOINTS.sm}px) {
    font-size: 96px;
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    font-size: 128px;
  }

  @media (min-width: ${BREAKPOINTS.xl}px) {
    font-size: 160px;
  }
`;
