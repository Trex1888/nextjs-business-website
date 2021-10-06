function Work2({ img, title, info, names }) {
  return (
    <div className="relative lg:flex mt-24 lg:ml-32">
      <div
        className="relative h-96 max-w-[500px] sm:max-w-[900px] lg:max-w-[975px] opacity-80
      border-btn border-4"
      >
        <img src={img} alt="img" className="object-cover rounded-2xl" />
      </div>
      <div className="absolute top-28 left-12">
        {/* <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white text-lg">{names}</p> */}

        {/* <button
          className="bg-btn text-white font-medium hover:bg-white hover:text-btn
          py-4 px-12 mt-5"
        >
          {names}
        </button> */}
      </div>
      <h2
        className="text-white lg:inline-flex mx-auto ml-20 relative left-14
      lg:top-14"
      >
        {title}
      </h2>
      <h2
        className="text-white lg:inline-flex mx-auto ml-20 relative left-14
      lg:top-14"
      >
        {names}
      </h2>
      <div
        className="relative bottom-12 bg-gray-100 pl-4 pb-12 rounded-2xl max-w-[500px] 
        sm:max-w-[900px] lg:max-w-[500px] lg:right-20 lg:top-10 xl:top-24 lg:mb-56"
      >
        <p className="px-4 py-4 text-navy-light font-light">{info}</p>
      </div>{" "}
      {/* <div
        className="relative w-60 mr mr-60 mx-auto mt-12
       mb-20 lg:mb-32"
      > */}
    </div>
  );
}

export default Work2;
