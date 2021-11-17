import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsContext } from '../context';
import { setTotalQty } from '../lib/handleQty';

const CheckoutPopover = ({ item }) => {
  const appContext = useContext(ProductsContext);
  const { cartItemsList, setCartItemsList } = appContext;

  const handleClick = (id) => {
    const itemsList = cartItemsList.filter((x) => x.id !== id).slice();
    setCartItemsList(itemsList);
    setTotalQty(itemsList, appContext);
  };

  return (
    <li key={item.id} className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden relative">
        <Image
          src={item.src}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <Link href="/item/[id]" as={`/item/${item.id}`} passHref>
              <h3 className="text-secondary hover:cursor-pointer">
                {item.name}
              </h3>
            </Link>
            <p className="ml-4">
              $
              {item.price * item.qty}
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty
            {' '}
            {item.qty}
          </p>

          <div className="flex">
            <button onClick={() => handleClick(item.id)} type="button" className="font-medium text-secondary hover:font-bold">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CheckoutPopover;
