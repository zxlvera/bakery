const Subscribe = () => (
  <div className="bg-primary">
    <div className="container mx-auto">
      <div className="p-10 py-20 flex flex-col flex-wrap justify-center content-center">
        <div className="m-0 p-0 text-3xl font-bold text-tertiary antialiased text-center">Subscribe to Our Updates</div>
        <div className="m-0 p-0 text-xl text-tertiary antialiased text-center">Find out about events and other news</div>
        <div className=" mt-6 flex flex-row flex-wrap">
          <input type="text" className=" text-tertiary  w-2/3  p-2  rounded-l-lg" placeholder="john@mail.com" />
          <button className="p-2 w-1/3  bg-secondary text-neutral uppercase font-bold rounded-r-lg hover:bg-tertiary" type="button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;
