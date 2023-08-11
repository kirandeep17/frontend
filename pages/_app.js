import Layout from '../components/Layout/Layout';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    const renderWithLayout =
      Component.getLayout ||
      function (page) {
        return <Layout>{page}</Layout>;
      };
  
    return renderWithLayout(<Component {...pageProps} />);
  }