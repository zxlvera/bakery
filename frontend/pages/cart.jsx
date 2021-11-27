import { useContext } from 'react';
import Link from 'next/link';
import { ProductsContext } from '../context';
import CartList from '../components/CartList';
import Button from '../components/Button';

const Cart = () => {
  const { cartItemsList } = useContext(ProductsContext);

  return (
    <div className="container mx-auto">
      {cartItemsList.length > 0
    && (
      <div className="my-8 mx-20">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItemsList.map((item) => (
              <CartList item={item} />
            ))}
          </ul>
        </div>
      </div>
    )}
      {cartItemsList.length === 0
        && (
          <div>
            <h1>Cart is empty!</h1>
            <Link href="/shop" passHref><div><Button text="Head back" /></div></Link>
          </div>
        )}
    </div>
  );
};
export default Cart;
