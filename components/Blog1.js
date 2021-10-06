import Image from "next/image";
import three from "../images/three.jpg";

function Blog1() {
  return (
    <div className="relative w-full border-b-8 border-btn h-[300px]">
      <Image
        loading="lazy"
        src={three}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      <div className="absolute top-4 lg:top-1/3 lg:mt-6 w-full text-center opacity-100">
        <h2 className="text-3xl px-20 text-white font-light mb-1 leading-tight lg:text-4xl">
          Sharing our Passion for Technology
        </h2>
        <h2 className="text-3xl px-20 text-white font-medium leading-tight lg:text-5xl">
          & CONTINUOUS LEARNING
        </h2>
      </div>
    </div>
  );
}

export default Blog1;
