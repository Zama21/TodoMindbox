import { BaseCheckboxProps } from './BaseCheckbox.types';
import {
  BaseCheckboxWrapper,
  StyledCheck,
  StyledCheckboxView,
  StyledInput,
} from './BaseCheckbox.styles';

export const BaseCheckbox = ({
  label,
  className,
  children,
  ...props
}: BaseCheckboxProps) => {
  return (
    <BaseCheckboxWrapper className={className}>
      <StyledInput type="checkbox" {...props} />
      <StyledCheckboxView>
        <StyledCheck />
      </StyledCheckboxView>
      {label ? label : children}
    </BaseCheckboxWrapper>
  );
};
