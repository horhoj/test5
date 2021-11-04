import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  type: ButtonHTMLAttributes<null>['type'];
  onClick?(): void;
  icon: string;
  iconSize: number;
}
