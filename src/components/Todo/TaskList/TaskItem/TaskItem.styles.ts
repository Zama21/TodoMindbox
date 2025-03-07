import { BREAKPOINTS } from '@/constants/device';
import { BaseCheckbox } from '@/shared';
import styled from '@emotion/styled';

export const TaskItemWrapper = styled.li`
  display: grid;
  border-top: #ededed 1px solid;
  overflow: hidden;
  transition:
    grid-template-rows 500ms,
    opacity 500ms,
    transform 500ms;

  &:last-child {
    border-bottom: #ededed 1px solid;
  }

  &.fade-enter {
    opacity: 0;
    grid-template-rows: 0fr;
  }

  &.fade-enter-active {
    opacity: 1;
    grid-template-rows: 1fr;
  }

  &.fade-exit {
    opacity: 1;
    grid-template-rows: 1fr;
  }

  &.fade-exit-active {
    opacity: 0;
    grid-template-rows: 0fr;
  }
`;

export const StyledBaseCheckbox = styled(BaseCheckbox)`
  width: 100%;
  height: 42px;
  padding: 8px 4px 8px 8px;
  gap: 16px;
  position: relative;
  ${(props) => (props.checked ? 'color:#d9d9d9' : null)};
  transition: color 0.5s ease-out;

  &:hover,
  &:focus-within {
    box-shadow: 0px 0px 5px 0px rgba(34, 60, 80, 0.2) inset;
  }

  @media (min-width: ${BREAKPOINTS.sm}px) {
    padding: 12px 4px 12px 8px;
    height: 52px;
  }

  @media (min-width: ${BREAKPOINTS.md}px) {
    height: 64px;
    padding: 16px;
    padding-left: 12px;
  }
`;

export const StylesSpan = styled.span<{ checked: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    height: 1px;
    position: absolute;

    transition:
      width 0.5s ease-out,
      background-color 0.5s ease-out;

    width: ${(props) => (props.checked ? '100%' : 0)};
    background-color: ${(props) => (props.checked ? '#d9d9d9' : 'black')};
  }
`;
