import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: IBM Plex Sans, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #ccc;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  min-width: 360px;
  padding: 10px;
`;

export const Title = styled.h2<{ isAlignCenter?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  ${({ isAlignCenter }) => (isAlignCenter ? `justify-content: center;` : '')};

  color: #333;
`;

export const Element = styled.div<{
  mt: number;
}>`
  margin-top: ${({ mt }) => mt}px;
`;
