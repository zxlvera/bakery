import { useContext } from 'react';
import CartList from '../components/CartList';
import { ProductsContext } from '../context';

const Cart = () => {
  const { cartItemsList } = useContext(ProductsContext);
  return (
    <div>
      {cartItemsList.map((item) => (
        <CartList item={item} />))}
    </div>
  );
};
export default Cart;
