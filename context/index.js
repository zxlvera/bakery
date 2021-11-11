import React, { useState } from 'react';
import data from './data.json';
import categories from './categories.json';

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState(data);
  const [subCategories, setSubCategories] = useState(categories);
  const [cartItemsList, setCartItemsList] = useState([]);
  const [cartTotalQty, setCartTotalQty] = useState(0);

  return (
    <ProductsContext.Provider value={{
      products,
      setProducts,
      subCategories,
      setSubCategories,
      cartItemsList,
      setCartItemsList,
      cartTotalQty,
      setCartTotalQty,
    }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
