function Work({
  img,
  title,
  description,
  buttonText,
  problem,
  solution,
  stack,
  title2,
}) {
  return (
    <section className="relative lg:flex mt-24 lg:ml-32">
      <div className="relative h-96 max-w-[500px] sm:max-w-[900px] lg:max-w-[975px] opacity-80">
        <img src={img} alt="img" className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-28 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white text-lg">{description}</p>

        <button
          className="bg-btn text-white font-medium hover:bg-white hover:text-btn
          py-4 px-12 mt-5"
        >
          {buttonText}
        </button>
      </div>

      <div
        className="relative bottom-12 bg-white mb-20 pl-4 pb-12 rounded-2xl max-w-[500px] 
        sm:max-w-[900px] lg:max-w-[700px] lg:right-20 lg:top-10 lg:mb-40 xl:mr-24"
      >
        <h2 className="text-indigo-800 mx-2 text-2xl mb-4 px-2 pt-6">
          {title2}
        </h2>

        <p className="px-4 text-gray-800">
          <span className="text-black text-xl font-medium">PROBLEM</span>
          {problem}
          <br /> <br />
          <span className="text-black text-xl font-medium">SOLUTION</span>
          {solution}
          <br /> <br />
          <span className="text-black text-xl font-medium">TECH STACK</span>
          {stack}
        </p>
      </div>
    </section>
  );
}

export default Work;
