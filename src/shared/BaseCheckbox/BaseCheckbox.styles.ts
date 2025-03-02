import styled from '@emotion/styled';
import checkIcon from '@/assets/icons/check.svg?react';

export const BaseCheckboxWrapper = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  user-select: none;
`;

export const StyledInput = styled.input`
  appearance: none;
  position: absolute;
  opacity: 0;

  & + span svg {
    opacity: 0;
  }

  &:checked + span svg {
    opacity: 1;
  }
`;

export const StyledCheckboxView = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 10px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;
  position: relative;

  border: #cfe1de 1px solid;

  color: #7ec3b3;
`;

export const StyledCheck = styled(checkIcon)`
  height: 100%;
`;
