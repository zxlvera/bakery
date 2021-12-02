import Link from 'next/link';
import Image from 'next/image';

const Product = ({ product }) => {
  const {
    id, src, name, price,
  } = product;

  return (
    <div>
      <Link href="/item/[id]" as={`/item/${id}`} passHref>
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:cursor-pointer hover:drop-shadow-2xl hover:scale-105">
          <Image
            src={src}
            alt="placehodler"
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <h3 className="mt-4 text-sm text-gray-700">
        {name}
      </h3>
      <p className="mt-1 text-lg font-medium text-secondary">
        $
        {price}
      </p>
    </div>
  );
};

export default Product;
