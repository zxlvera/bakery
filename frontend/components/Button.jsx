const Button = ({ text }) => (
  <div className="my-2 w-auto">
    <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-secondary text-neutral p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:scale-105">
      {text}
    </button>
  </div>
);

export default Button;
