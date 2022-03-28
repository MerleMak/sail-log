import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 112.5%;
    font-family: Raleway;
    background-color: #82C9D9;
    color: #013440;

  }

  input, label, button, textarea {
    font-size: 1em;
    font-family: Raleway;
  }
`;
