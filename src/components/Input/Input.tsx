import React from 'react';
import styled from 'styled-components';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  placeholder,
  error,
  showError = false,
  name,
  type,
  onBlur,
}) => {
  return (
    <Wrap>
      <InputWrap>
        <Label>{label}</Label>
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          showError={showError}
        />
      </InputWrap>
      <div>
        {showError ? <Error>{error ? error : <>&nbsp;</>}</Error> : null}
      </div>
    </Wrap>
  );
};

const StyledInput = styled.input<{ showError: boolean }>`
  position: relative;
  height: 56px;
  background: #fff;
  border: 1px solid ${({ showError }) => (showError ? 'red' : '#f1f1f1')};
  border-radius: 4px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
  width: 100%;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;

  :focus {
    border: 1px solid ${({ showError }) => (showError ? 'red' : '#0880ae')};
  }
  ::placeholder {
    color: #7c9cbf;
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

const InputWrap = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
  position: absolute;
  z-index: 100;
  top: 8px;
  left: 10px;
`;

const Error = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: red;
  margin-top: 8px;
`;
