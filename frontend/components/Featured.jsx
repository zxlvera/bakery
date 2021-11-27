import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const bakedList = [
    { id: 1, title: 'croissants', src: 'https://res.cloudinary.com/zxlim9/image/upload/v1637392191/bakery/prod-croissant_crxfpt.jpg' },
    { id: 2, title: 'cupcakes', src: 'https://res.cloudinary.com/zxlim9/image/upload/v1637392194/bakery/prod-cupcakes_ts4g4e.jpg' },
    { id: 3, title: 'cookies', src: 'https://res.cloudinary.com/zxlim9/image/upload/v1637392193/bakery/prod-cookies_tofgjt.jpg' },
  ];

  return (
    <div className="container mx-auto">
      <main className="py-16 grid grid-cols-auto-fit gap-4 w-full justify-items-center">
        {bakedList.map((bakes) => (
          <FeaturedCard key={bakes.id} bakes={bakes} />
        ))}
      </main>
    </div>
  );
};

export default Featured;
