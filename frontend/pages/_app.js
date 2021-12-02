import 'tailwindcss/tailwind.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ProductsProvider } from '../context';
import Nav from '../components/Nav';
import StickyCart from '../components/StickyCart';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ProductsProvider>
        <Nav />
        <Component {...pageProps} />
        <StickyCart />
      </ProductsProvider>
    </UserProvider>
  );
}

export default MyApp;
