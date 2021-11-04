import React, { ChangeEvent, InputHTMLAttributes } from 'react';

export interface InputProps {
  name?: string;
  value: string;
  type: InputHTMLAttributes<null>['type'];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  error?: string | undefined;
  showError?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
