function Dedicated() {
  return (
    <div className="border relative border-white max-w-6xl mx-auto lg:mb-44">
      <h2
        className="text-white justify-center text-center text-2xl my-4 mx-20
         font-light lg:my-6"
      >
        We are dedicated to helping our partners grow and become more productive
        through creative and open technology solutions.
      </h2>

      <button
        className="ml-32 justify-center font-semibold bg-green-500 text-white py-4 px-12 -mb-7
        hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        OUR SERVICES
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        OUR PROMISE
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white 
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        OUR CLIENTS
      </button>
    </div>
  );
}

export default Dedicated;
