import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-base mb-8 max-w-md">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="flex items-center gap-4">
          
           <a href="#technologies"
            className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>
          
            <a href="#about"
            className="px-6 py-3 rounded-full text-sm font-semibold text-gray-700 border border-gray-300 hover:border-gray-400 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Dev Stack Hero"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;