import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { ProductsContext } from '../context';
import Button from './Button';

const StickyCart = () => {
  const {
    cartItemsList, setCartItemsList, cartTotalQty, setCartTotalQty,
  } = useContext(ProductsContext);

  const getCheckoutTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItemsList.length; i += 1) {
      const item = cartItemsList[i];
      const itemTotal = item.qty * item.price;
      total += itemTotal;
    }
    return total;
  };

  return (
    <div className="bg-primary sticky bottom-0">
      { cartTotalQty > 0
      && (
      <Popover className="relative flex justify-center">
        <div className="w-1/4 flex justify-evenly items-center">
          <Link href="/cart" passHref>
            <h1 className="underline hover:cursor-pointer">
              {cartTotalQty}
              {' '}
              Items
            </h1>
          </Link>
          <div>
            <h1>
              {' '}
              $
              {getCheckoutTotal()}
            </h1>
          </div>
          <Link href="/cart" passHref>
            <Button text="Checkout" />
          </Link>
        </div>
      </Popover>
      ) }
    </div>
  );
};

export default StickyCart;
