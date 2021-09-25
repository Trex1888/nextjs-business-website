function Info({ info, btn1, btn2, btn3 }) {
  return (
    <div
      className="border relative border-white max-w-6xl mx-8 mb-32 
      lg:mb-44 lg:mx-20 xl:mx-auto"
    >
      <h2
        className="text-white justify-center text-center text-2xl my-4 mx-20
        font-extralight leading-relaxed lg:my-6 lg:pt-4"
      >
        {info}
      </h2>

      <button
        className="ml-32 justify-center font-semibold bg-green-500 text-white py-4 px-12 -mb-7
        hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        {btn1}
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        {btn2}
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white 
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        {btn3}
      </button>
    </div>
  );
}

export default Info;
