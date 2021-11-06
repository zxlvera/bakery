import Button from './Button';

const Hero = () => (
  <div className="bg-primary">
    <div className="container mx-auto px-8">
      <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
        <div className="sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="uppercase text-4xl lg:text-6xl text-tertiary font-bold leading-none tracking-wide mb-2">Confectionery</h1>
          <h2 className="uppercase text-2xl lg:text-4xl text-secondary tracking-widest mb-6">Right at your doorstep</h2>
          <p className="text-tertiary leading-relaxed mb-12">We offer a wide range of handmade pieces, each made with care.</p>
          <Button text="Learn More" />
        </div>
        <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:pl-12">
          <img alt="hero_img" src="/img/hero-img.jpg" />
        </div>
      </main>
    </div>
  </div>
);

export default Hero;
