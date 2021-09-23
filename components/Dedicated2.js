function Dedicated2() {
  return (
    <div
      className="border relative border-white max-w-7xl mx-8 
     md:mx-20 lg:mx-36 xl:mx-52"
    >
      <h2
        className="text-white justify-center text-center text-2xl my-4 mx-12 pb-4
          font-light leading-relaxed lg:mt-14 lg:mb-4 lg:mx-32"
      >
        Our goal is to be an{" "}
        <span className="blue">extension of your team</span> and your ally for
        delivering top notch software solutions. As an Iowa company with a
        strong work ethic, we take pride in earning and maintaining the trust of
        our partners.
      </h2>

      <button
        className="ml-32 lg:ml-48 justify-center font-semibold bg-btn text-white py-4 px-12 -mb-7
        hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        CALL US
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-btn text-white
         py-4 px-12 -mb-7 hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        EMAIL US
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-btn text-white 
         py-4 px-12 -mb-7 hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        TWEET US
      </button>
    </div>
  );
}

export default Dedicated2;
