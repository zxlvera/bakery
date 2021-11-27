import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import data from './data.json';
import categories from './categories.json';

const ProductsContext = React.createContext();

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    Axios({
      method: 'GET',
      url: 'http://localhost:8080/',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      console.log(res.data.products);
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
