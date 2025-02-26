import styled from '@emotion/styled';

export const FiltersBarWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  transition:
    color 0.5s ease-out,
    background-color 0.5s ease-out;
  padding: 4px;
  border: 1px solid
    ${({ isActive }) => (isActive ? ' #ecd7d7 ' : 'transparent')};
  border-radius: 4px;

  &:hover,
  &:focus-visible {
    color: black;
    background-color: #d1d1d11f;
  }
`;
