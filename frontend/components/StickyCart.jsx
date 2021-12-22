import React, { useContext } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { ProductsContext } from '../context';
import Button from './Button';

const StickyCart = () => {
  const {
    cartItemsList, cartTotalQty,
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
          <h1>
            {cartTotalQty}
            {' '}
            Items
          </h1>
          <div>
            <h1>
              {' '}
              $
              {getCheckoutTotal()}
            </h1>
          </div>
          <Link href="/preview" passHref>
            <div>
              <Button text="Checkout" />
            </div>
          </Link>
        </div>
      </Popover>
      ) }
    </div>
  );
};

export default StickyCart;
