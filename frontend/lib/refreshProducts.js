import axios from 'axios';

const refreshProducts = (appContext) => {
  const {
    setProducts,
  } = appContext;

  axios.get('http://localhost:3001/')
    .then((res) => {
      setProducts(res.data.products);
    });
};

export default refreshProducts;
