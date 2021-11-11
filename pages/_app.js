import 'tailwindcss/tailwind.css';
import { ProductsProvider } from '../context';
import Nav from '../components/Nav';
import StickyCart from '../components/StickyCart';

function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Nav />
      <Component {...pageProps} />
      <StickyCart />
    </ProductsProvider>
  );
}

export default MyApp;
