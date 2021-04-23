import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *,
    *:before,
    *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    *:focus {
    outline: 0;
    }

    body {
      font-family: "Raleway", sans-serif;
    }
`;

export default GlobalStyle;
