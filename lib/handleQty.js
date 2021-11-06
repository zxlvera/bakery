export const getQty = (id, appContext) => {
  const {
    cartItemsList,
  } = appContext;

  if (cartItemsList.some((item) => item.id === id)) {
    return cartItemsList.filter((item) => item.id === id)[0].qty;
  }
  return 0;
};

export const addQty = (id, appContext) => {
  const {
    products,
    cartItemsList,
    setCartItemsList,
  } = appContext;
  const item = products.filter((p) => p.id === id);
  // if exist in array, dont add?? add qty??
  if (cartItemsList.some((x) => x.id === id)) {
    item[0].qty += 1;
  } else {
    item[0].qty = 1;
  }
  cartItemsList.some((x) => x.id === item[0].id) ? setCartItemsList([...cartItemsList]) : setCartItemsList([...cartItemsList, ...item]);
};

export const subtractQty = (id, appContext) => {
  const { products, cartItemsList, setCartItemsList } = appContext;
  const item = products.filter((p) => p.id === id);
  item[0].qty !== 0 ? item[0].qty -= 1 : 0;
  item[0].qty === 0 ? setCartItemsList([...cartItemsList.filter((prod) => prod.id !== id)]) : setCartItemsList([...cartItemsList]);
};
