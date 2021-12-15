import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, body, #root {
    height: 100%;
}

`;
