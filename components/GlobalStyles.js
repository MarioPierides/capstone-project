import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
font-family: 'Open Sans' , sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: auto;
    background-color: whitesmoke;
    color: black;
    padding: 20px;
  }
  
  html {
    font-size: 0.8em;

  }
`;

export default GlobalStyles;

export const theme = {
  colors: {
    primary: '#FFE085',
    secondary: '#FFF5D6',
    text: '#FFE085',
    background: '#FFE085',
  },
  boxShadow: {
    shadowLight: '5px 5px 10px grey',
    shadowHeavy: '5px 5px 10px black',
  },
};
