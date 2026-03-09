import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.offwhite};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: clip;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body.cursor-active { cursor: none; }

  a { text-decoration: none; color: inherit; }
  img { max-width: 100%; display: block; }
  button { font-family: inherit; cursor: pointer; }

  /* Grain texture overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }
`;

export default GlobalStyle;
