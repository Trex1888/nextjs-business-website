function Info5() {
  return (
    <div
      className="border relative border-white max-w-6xl mx-8 mb-32 
        lg:mb-44 lg:mx-20 xl:mx-auto"
    >
      <h2
        className="text-white justify-center text-center text-2xl my-4 mx-20
          font-extralight leading-relaxed lg:my-6 lg:pt-4"
      >
        Our partners tell us we{" "}
        <span className="highlight">act like owners</span>, not renters. Our
        slippers symbolize this owner mindset. Renters wear shoes at home, but
        an owner takes them off as they come through the door. We wear slippers
        in the office for the same reason. We are always looking for teammates
        and apprentices that align with{" "}
        <span className="highlight">our expertise</span> and{" "}
        <span className="highlight">core values.</span>
      </h2>

      <button
        className="ml-32 justify-center font-semibold bg-green-500 text-white py-4 px-12 -mb-7
          hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        APPLY TODAY
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white
           py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        LEARN MORE
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white 
           py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        OUR TEAM
      </button>
    </div>
  );
}

export default Info5;
