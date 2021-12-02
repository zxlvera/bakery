const filterData = (title, appContext) => {
  const {
    products,
  } = appContext;

  const filterProducts = products.slice().filter((prod) => prod.type === title);
  return filterProducts;
};

export default filterData;
