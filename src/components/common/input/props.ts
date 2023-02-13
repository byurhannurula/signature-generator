import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label?: string;
  errors?: any;
  title?: string;
  prefix?: string | undefined;
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
  icon?: string;
  iconColor?: string;
}

export const defaultProps = {
  type: 'text',
  errors: {},
  icon: '',

  iconColor: 'currentColor',
};
