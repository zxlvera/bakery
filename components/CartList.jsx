import { useContext } from 'react';
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
    <div className="flex flex-col h-20 border-b-2 ">
      <div className="relative ">
        <div className="absolute w-full  rounded-b border-t-0 z-10">
          <div className="flex w-64">
            <div className="flex-auto text-sm w-32">
              <div className="font-bold">{item.name}</div>
              <div className="text-tertiary">{item.qty}</div>
              <div className="text-tertiary">
                $
                {item.price * item.qty}
              </div>
            </div>
            <div role="input" onClick={() => handleClick(item.id)} className="flex flex-col w-18 font-medium items-end">
              <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopover;
