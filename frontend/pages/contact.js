import Button from '../components/Button';

const Contact = () => (
  <div className="container mx-auto my-4 px-8 py-20">
    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
      <div className="flex">
        <h1 className="font-bold uppercase text-5xl">
          Send us a
          <br />
          {' '}
          message
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Last Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
          type="email"
          placeholder="Email*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
          type="number"
          placeholder="Phone*"
        />
      </div>
      <div className="my-4">
        <textarea placeholder="Message*" className="w-full h-32 bg-neutral text-tertiary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
      </div>
      <Button text="Send Message" />
    </div>
  </div>
);

export default Contact;
