import five from "../images/five.jpg";

function Benefits({
  img,
  bens,
  perks,
  name,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,
}) {
  return (
    <section className="relative mb-10 md:mx-6 lg:flex xl:ml-40 xl:mb-44">
      <div className="relative h-96 max-w-[500px] sm:max-w-[900px] xl:max-w-[600px] lg:flex">
        <img
          src={img}
          alt="img"
          className="object-cover rounded-2xl opacity-90"
        />
      </div>

      <div
        className="relative bottom-16 bg-gray-100 pb-4 rounded-2xl max-w-[500px] 
        sm:max-w-[900px] lg:max-w-[700px] xl:max-w-[800px] md:flex
        lg:-bottom-8 lg:right-12 xl:mr-44 lg:pr-28"
      >
        <h2
          className="text-navy text-2xl font-normal mb-2 px-5 pt-4 text-left 
          md:relative md:left-16"
        >
          {bens}
        </h2>

        <ul
          className="px-8 ml-12 mx-auto font-light space-y-1 pb-4 list-disc text-navy-light 
          md:mt-14 md:text-left md:relative md:right-20 lg:mt-16 xl:pb-6"
        >
          <li>{name}</li>
          <li>{name1} </li>
          <li>{name2} </li>
          <li>{name3} </li>
          <li>{name4} </li>
          <li>{name5} </li>
          <li>{name6} </li>
        </ul>

        <h2
          className="text-navy text-2xl font-normal mb-2 px-5 pt-4 text-left 
          md:relative md:left-10 xl:left-28"
        >
          {perks}
        </h2>

        <ul
          className="px-8 ml-8 font-light space-y-1 pb-4 list-disc text-navy-light 
          mx-auto md:relative md:right-20 xl:left-0 md:mt-14"
        >
          <li>{name6}</li>
          <li>{name7} </li>
          <li>{name8} </li>
          <li>{name9} </li>
          <li>{name10} </li>
          <li>{name11} </li>
          <li>{name12} </li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
