import React, { useContext } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { ProductsContext } from '../context';
import CheckoutPopover from './CheckoutPopover';
import Button from './Button';

const Nav = () => {
  const { cartItemsList } = useContext(ProductsContext);

  let c = {};
  if (cartItemsList.length > 0) {
    c = cartItemsList.reduce((total, x) => ({ qty: total.qty + x.qty }));
  } else {
    c.qty = 0;
  }

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
    <nav className="bg-neutral shadow">
      <div className="container mx-auto px-8 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-16" src="/logo.svg" alt="My logo" />
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:flex items-center">
          <div className="flex flex-col gap-2 md:flex-row md:mx-6">
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/">Home</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/about">About</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/contact">Contact</Link>
            <Link className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="/shop">Shop</Link>
          </div>

          <div className="flex justify-center md:block">
            <Popover className="relative">
              <Popover.Button>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Popover.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="bg-neutral absolute z-50 -left-60">
                  <div className="border-dotted border-2 w-64">
                    {cartItemsList.map((item) => (
                      <CheckoutPopover key={item.id} item={item} />
                    ))}
                    <div className="p-4 justify-center flex">
                      <Button text={`Checkout: $  ${getCheckoutTotal()}`} />
                    </div>
                  </div>

                  <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs" />
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
          <h1>{c.qty}</h1>
        </div>
      </div>
    </nav>

  );
};

export default Nav;
