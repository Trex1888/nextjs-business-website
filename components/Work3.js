function Work3({ img, main, info, buttonText, title1 }) {
  return (
    <section className="relative lg:flex mt-12 lg:bottom-20 lg:ml-32 lg:mb-36">
      <div className="relative border-4 border-btn rounded-lg h-96 max-w-[500px] sm:max-w-[900px] lg:max-w-[975px] opacity-80">
        <img src={img} alt="img" className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-12 lg:top-28 left-12">
        <h3 className="text-2xl lg:text-4xl mb-3 w-64 text-white">{main}</h3>

        <button
          className="bg-btn text-white font-medium hover:bg-white hover:text-btn
          py-4 px-12 mt-5"
        >
          {buttonText}
        </button>
      </div>

      <div
        className="relative bottom-12 bg-gray-100 pb-4 pl-4 rounded-2xl max-w-[500px] 
        sm:max-w-[900px] lg:max-w-[700px] lg:right-20 lg:mb-48 lg:top-28 xl:mr-24"
      >
        <h2 className="text-navy mx-2 text-2xl mb-4 px-2 pt-6">{title1}</h2>

        <p className="px-4 text-navy-light font-light">{info}</p>
      </div>
    </section>
  );
}

export default Work3;
