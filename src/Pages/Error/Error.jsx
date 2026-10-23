import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex gap-y-5 text-center justify-center items-center flex-col   bg-site bg-no-repeat bg-cover overflow-hidden">
      <h1 className="md:text-9xl text-8xl font-semibold text-center">
        <span className="mr-5 animate-pulse block">404</span>
      </h1>
      <h2 className="md:text-7xl text-5xl font-medium">hmmm, ne najdem</h2>
      <h3 className="md:text-4xl text-3xl  mt-5">
        Whooopsii.. Stran, ki jo iščete ne obstaja? :o
      </h3>
      <Link to="/">
        <button className="btn btn-lg md:mt-6 mt-4">Nazaj na glavno stran. </button>
      </Link>
    </div>
  );
};

export default Error;
