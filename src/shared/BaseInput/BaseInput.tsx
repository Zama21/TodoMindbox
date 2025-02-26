import { TextBox } from './BaseInput.styles';
import { BaseInputProps } from './BaseInput.types';

export const BaseInput = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  ...props
}: BaseInputProps) => {
  return (
    <TextBox
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
