import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';

const theme = {
  colors: {
    primary: '#0510f6',
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
