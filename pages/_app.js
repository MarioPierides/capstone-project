import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import { theme } from '../components/GlobalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
