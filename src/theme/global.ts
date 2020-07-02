import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    height: 100%;
  }
  body {
    font-family: 'Raleway', sans-serif;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  a, a:hover {
    text-decoration: none !important;
    color: white;
  }
  input, button {
    border: 0;
  }
`;
