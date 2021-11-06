import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const bakedList = [
    { id: 1, title: 'croissants', src: '/img/prod-croissant.jpg' },
    { id: 2, title: 'cupcakes', src: '/img/prod-cupcakes.jpg' },
    { id: 3, title: 'cookies', src: '/img/prod-cookies.jpg' },
  ];

  return (
    <div className="container mx-auto px-8">
      <main className="py-16 grid grid-cols-auto-fit gap-4 w-full justify-items-center">
        {bakedList.map((bakes) => (
          <FeaturedCard key={bakes.id} bakes={bakes} />
        ))}
      </main>
    </div>
  );
};

export default Featured;
