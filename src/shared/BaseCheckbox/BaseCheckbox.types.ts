export type BaseCheckboxProps = {
  label?: string;
  hasError?: boolean;
  required?: boolean;
  errorMessage?: string;
  CustomLabel?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;
