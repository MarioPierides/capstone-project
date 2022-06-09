import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans' , sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    background-color: white;
    padding: 0 20px;
    max-width: 420px;
  }
  
  html {
    font-size: 0.8em;
  }
`;

export default GlobalStyles;

export const theme = {
  colors: {
    primary: 'green',
    secondary: '#FFF5D6',
    text: '#FFE085',
    background: 'green',
  },
  boxShadow: {
    shadowLight: '5px 5px 10px grey',
    shadowHeavy: '5px 5px 10px black',
  },
};
