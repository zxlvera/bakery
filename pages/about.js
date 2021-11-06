const About = () => (
  <div className="container mx-auto px-8 py-12">
    <div className="bg-neutral shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="">
          <img className="md:max-w-md" src="/img/profile1.jpg" alt="profile pic" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-md text-tertiary font-bold">About</div>
          <h3 className="my-4 text-5xl text-secondary">Hi, my name is Kelly and I love to bake.</h3>
          <p className="text-gray-500">
            Baking has always been my passion, I love to bake for my family and friends whenever there is an occassion. Bringing joy to everyone is my lifes motto!
            Baking has also been a form of therapy for me. I get to explore my creative side, and an escape outlet from  my real job as an engineer. With support from my family and friends, this little online store was found to share my bakes with everyone. Hope you enjoy!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
