import data from '../context/data.json';

const sortProducts = (option) => {
  switch (option) {
    case 'Best Rating':
      return (data.sort((a, b) => ((a.rating > b.rating) ? 1 : -1)));
    case 'Price: Low to High':
      return (data.sort((a, b) => ((a.price > b.price) ? 1 : -1)));
    case 'Price: High to Low':
      return (data.sort((a, b) => ((a.price < b.price) ? 1 : -1)));
    default:
      return data;
  }
};

export default sortProducts;
