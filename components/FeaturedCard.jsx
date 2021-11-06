import { useContext } from 'react';
import Link from 'next/link';
import filterData from '../lib/filterData';
import { ProductsContext } from '../context';

const FeaturedCard = ({ bakes }) => {
  const { src, title } = bakes;
  const appContext = useContext(ProductsContext);
  const { setProducts } = appContext;

  const handleClick = (title) => {
    setProducts(filterData(title));
  };

  return (

    <div className="rounded-lg">
      <div className="bg-neutral rounded-lg w-96">
        <img
          src={src}
          alt=""
          className="w-full h-48 object-cover transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100"
        />

        <div className="px-10 py-6 mb-10 text-center">
          <div className="mb-4 text-3xl font-bold text-tertiary uppercase">{title}</div>
          <span className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam
            distinctio molestias. Incidunt at consequuntur consequatur
            officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?
          </span>
        </div>
        <Link href="/shop">
          <button onClick={() => handleClick(title)} className="w-full h-16 text-lg font-extrabold text-neutral transition duration-300 bg-tertiary rounded-b-lg hover:bg-secondary">VIEW MORE</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
