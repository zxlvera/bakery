import React, { useState, useEffect } from 'react';
import axios from 'axios';
import categories from './categories.json';

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    axios.get('http://localhost:3001/')
      .then((res) => {
        setProducts(res.data.products);
      });
  }, []);
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
