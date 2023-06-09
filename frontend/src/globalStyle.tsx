import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  ul, li, ol {
    margin:0;
    padding:0;
    list-style:none;
    list-style-type:none;
  }

  html, body {
    margin:0;
    padding:0;
    width:100%;
    height: 100%;

    background-color: #0d5c75;
  }

  button {
    all: unset;
    cursor: pointer;
    
    &:disabled {
    pointer-events: none;
  }
  }
`;

export default GlobalStyle;
