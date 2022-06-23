import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 0.8em;
  }

  body {
    margin: 0 auto;
    max-width: 420px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans' , sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;

export const theme = {
  colors: {
    primary: 'white',
    secondary: '#FFF5D6',
    text: '#FFE085',
    background: 'green',
  },
  boxShadow: {
    shadowLight: '5px 5px 10px grey',
    shadowHeavy: '5px 5px 10px black',
  },
};
