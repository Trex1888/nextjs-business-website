function Work1({ img, title, description, name, name1, name2, name3 }) {
  return (
    <section className="relative mb-10 lg:flex lg:ml-32 xl:mb-36">
      <div className="relative h-96 max-w-[500px] sm:max-w-[900px] ">
        <img
          src={img}
          alt="img"
          className="object-cover rounded-2xl opacity-90"
        />
      </div>

      <div
        className="relative bottom-16 bg-white pl-4 rounded-2xl max-w-[500px] 
        sm:max-w-[900px] lg:max-w-[600px] xl:max-w-[700px] xl:top-0 xl:mr-44"
      >
        <h2 className="text-navy mx-2 text-2xl font-light mb-4 px-2 pt-6 underline text-center">
          {title}
        </h2>
        <p className="px-4 font-light pb-4 text-navy-light">{description}</p>

        <ul className="px-4 ml-8 font-light space-y-1 pb-8 list-disc xl:pb-6 text-navy-light">
          <li>{name}</li>
          <li>{name1} </li>
          <li>{name2} </li>
          <li>{name3} </li>
        </ul>
      </div>
    </section>
  );
}

export default Work1;
