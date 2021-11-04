import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  icon,
  iconSize,
}) => {
  return (
    <div>
      <StyledButton
        type={type}
        onClick={() => onClick && onClick()}
        icon={icon}
        iconSize={iconSize}
      />
    </div>
  );
};

const StyledButton = styled.button<{
  icon: string | null;
  iconSize: number;
}>`
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
  padding: 3px;

  background: rgba(255, 255, 255, 0) url(${({ icon }) => icon}) no-repeat center;
  background-size: ${({ iconSize }) => iconSize}px;

  //transition: opacity 200ms ease;

  :active {
    opacity: 0.8;
  }
`;
