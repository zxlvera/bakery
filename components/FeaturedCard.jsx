import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsContext } from '../context';
import { filterProducts } from '../lib/handleProducts';

const FeaturedCard = ({ bakes }) => {
  const { src, title } = bakes;
  const appContext = useContext(ProductsContext);

  const handleClick = (e) => {
    e.target.value = title;
    e.target.checked = true;
    filterProducts(e, appContext);
  };

  return (

    <div className="rounded-lg hover:scale-105 hover:cursor-pointer">
      <div className="bg-neutral rounded-lg w-96 flex flex-col">
        <div className="relative h-40 rounded-lg">
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            alt=""
            priority
          />
        </div>
        <div className="px-10 py-6 mb-10 text-center">
          <div className="mb-4 text-3xl font-bold text-tertiary uppercase">{title}</div>
          <span className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam
            distinctio molestias. Incidunt at consequuntur consequatur
            officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?
          </span>
        </div>
        <div>
          <Link href="/shop" passHref>
            <button onClick={(e) => handleClick(e)} className="w-full h-16 text-lg font-extrabold text-neutral transition duration-300 bg-tertiary rounded-b-lg hover:bg-secondary">VIEW MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
