export const getQty = (id, appContext) => {
  const {
    cartItemsList,
  } = appContext;

  if (cartItemsList.some((item) => item.id === id)) {
    return cartItemsList.filter((item) => item.id === id)[0].qty;
  }
  return 0;
};

export const setTotalQty = (itemsList, appContext) => {
  const {
    setCartTotalQty,
  } = appContext;

  let qtyTotal = 0;
  if (itemsList.length > 0) {
    qtyTotal = itemsList.reduce((total, x) => ({ qty: total.qty + x.qty }));
    qtyTotal = qtyTotal.qty;
  }
  setCartTotalQty(qtyTotal);
};

export const addToCart = (id, qty, appContext) => {
  const {
    products,
    cartItemsList,
    setCartItemsList,
  } = appContext;

  // Update cart items list
  const itemsList = cartItemsList.slice();
  const item = products.find((x) => x.id === id);
  item.qty = qty;
  if (!cartItemsList.some((x) => x.id === id)) {
    itemsList.push(item);
  }
  setCartItemsList(itemsList);

  // Get Total Quantity
  setTotalQty(itemsList, appContext);
};
