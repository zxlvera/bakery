import filterData from './filterData';
import sortProducts from './sortProducts';

export const filterProducts = (e, appContext) => {
  const {
    setProducts, subCategories, setSubCategories,
  } = appContext;

  const name = e.target.value;
  const cat = subCategories.slice();
  for (let index = 0; index < cat.length; index++) {
    if (cat[index].name === name) {
      cat[index].current = !cat[index].current;
    } else {
      cat[index].current = false;
    }
  }
  setSubCategories(cat);

  if (e.target.checked) {
    setProducts(filterData(name, appContext));
  } else {
    setProducts([...sortProducts('default', appContext)]);
  }
};

export const sortProductsOptions = (e, appContext) => {
  const {
    setProducts, subCategories, setSubCategories,
  } = appContext;

  const cat = subCategories.slice();
  for (let index = 0; index < cat.length; index++) {
    cat[index].current = false;
  }
  setSubCategories(cat);
  setProducts([...sortProducts(e.target.text, appContext)]);
};
