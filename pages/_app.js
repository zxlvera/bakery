import 'tailwindcss/tailwind.css';
import { ProductsProvider } from '../context';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Nav />
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
