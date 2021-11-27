import data from '../context/data.json';

const filterData = (title) => data.filter((prod) => prod.type === title);

export default filterData;
