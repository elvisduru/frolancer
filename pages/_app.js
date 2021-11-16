import '../styles/globals.css';
import AppLAyout from '../components/layout/AppLAyout';

function MyApp({ Component, pageProps }) {
  return (
    <AppLAyout>
      <Component {...pageProps} />;
    </AppLAyout>
  );
}

export default MyApp;
