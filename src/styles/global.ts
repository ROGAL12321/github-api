import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Global = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    touch-action: manipulation;
  }

  body {
    font-family: 'Lato', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-soothing: antialiased;
    -webkit-text-size-adjust: 100%;
    letter-spacing: 0.3px;
  }

  #root {
    overflow: inherit;
  }

  body,
  html {
    position: relative;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  input {
    font-family: 'Lato', sans-serif;
  }

  button {
    font-family: 'Lato', sans-serif;
  }
`;

export default Global;
