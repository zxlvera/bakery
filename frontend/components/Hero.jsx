import Image from 'next/image';
import Button from './Button';

const Hero = () => (
  <div className="bg-primary">
    <div className="container mx-auto">
      <main className="flex flex-col-reverse sm:flex-row jusitfy-between px-12 py-12 gap-8">
        <div className="sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-left py-32">
          <h1 className="uppercase text-4xl lg:text-6xl text-tertiary font-bold leading-none tracking-wide mb-2">Confectionery</h1>
          <h2 className="uppercase text-2xl lg:text-4xl text-secondary tracking-widest mb-6">Right at your doorstep</h2>
          <p className="text-tertiary leading-relaxed mb-12">We offer a wide range of handmade pieces, each made with care.</p>
          <Button text="Learn More" />
        </div>
        <div className="relative w-1/2 mb-16 sm:mb-0 mt-8 sm:mt-0 sm:pl-12">
          <Image
            src="https://res.cloudinary.com/zxlim9/image/upload/v1637392194/bakery/hero-img_mgo24r.png"
            alt="placeholder"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
    </div>
  </div>
);

export default Hero;
