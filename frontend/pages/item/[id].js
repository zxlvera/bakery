import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsContext } from '../../context';
import { getQty, addToCart } from '../../lib/handleQty';
import Button from '../../components/Button';

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  const appContext = useContext(ProductsContext);
  const {
    products,
  } = appContext;
  const [qty, setQty] = useState(getQty(id, appContext) > 0 ? getQty(id, appContext) : 0);

  let item = {
    name: 'empty', src: '', qty: 0, price: 0,
  };
  if (id) {
    item = products.find((x) => (x.id) === parseInt(id));
  }

  return (
    <div className="container h-screen mx-auto my-4 px-8 py-12">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96 relative">
          <Image
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src={item.src ? item.src : ''}
            alt={item.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-gray-700 uppercase text-lg">{item.name}</h3>
          <span className="text-gray-500 mt-3">
            $
            {item.price}
          </span>
          <hr className="my-3" />
          <div className="mt-2">
            <label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
            <div className="flex items-center mt-1">
              <button onClick={() => setQty(qty > 0 ? qty - 1 : 0)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <span className="text-gray-700 text-lg mx-2">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
            </div>
          </div>
          {/*
          <div className="mt-3">
            <label className="text-gray-700 text-sm" htmlFor="count">Color:</label>
            <div className="flex items-center mt-1">
              <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none" />
              <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none" />
              <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none" />
            </div>
          </div>
      */}
          <div className="flex mt-6">
            <button onClick={() => addToCart(id, qty, appContext)} className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none hover:bg-primary">
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
          </div>
          <Link href="/shop" passHref>
            <div className="w-32 opacity-60 hover:opacity-100">
              <Button text="Go Back" className="text-secondary hover:text-lg hover:cursor-pointer" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
