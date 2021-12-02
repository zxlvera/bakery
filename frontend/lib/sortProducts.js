import refreshProducts from './refreshProducts';

const sortProducts = (option, appContext) => {
  const { products, setProducts } = appContext;
  refreshProducts(appContext);

  switch (option) {
    case 'Best Rating':
      return (products.sort((a, b) => ((a.rating > b.rating) ? 1 : -1)));
    case 'Price: Low to High':
      return (products.sort((a, b) => ((a.price > b.price) ? 1 : -1)));
    case 'Price: High to Low':
      return (products.sort((a, b) => ((a.price < b.price) ? 1 : -1)));
    default:
      return products;
  }
};

export default sortProducts;
