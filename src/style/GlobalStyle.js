import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Dosis', sans-serif;
    }

    button, input[type="submit"] {
        cursor: pointer;
        border: none;
        font-family: 'Dosis', sans-serif;
    }

    input, select, option {
        font-family: 'Dosis', sans-serif;
    }
`;

export default GlobalStyle;