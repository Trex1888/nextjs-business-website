import Image from "next/image";
import Pic from "../images/long.png";

function Work({ img, title, description, buttonText }) {
  return (
    <section className="relative pt-24 pb-12 sm:mb-20 lg:ml-32">
      <div className="relative h-96 max-w-[500px] sm:max-w-[900px] lg:max-w-[600px] ">
        {/* <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        /> */}
        <img src={img} alt="img" className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white">{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Work;
