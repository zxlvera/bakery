import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-neutral">
      <Hero />
      <Featured />
      <Subscribe />
      <Footer />
    </div>
  );
}
