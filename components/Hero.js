import Image from "next/image";
import board from "../images/board.jpg";

function Hero() {
  return (
    <div
      className="relative mb-20 rounded-2xl shadow-md border-b-8 border-btn h-[300px] 
     sm:h-[400px] lg:h-[500px] lg:mx-32 lg:mt-12"
    >
      <Image
        loading="lazy"
        src={board}
        layout="fill"
        objectFit="cover"
        className="opacity-80 "
      />

      <div className="absolute bottom-1/2 w-full text-center">
        <p
          className="text-md text-right mr-12 text-white font-light
          sm:text-4xl lg:ml-10 lg:text-left xl:ml-20"
        >
          Your Partner for Building
        </p>
        <p
          className="text-2xl text-right mr-16 text-white font-medium
          sm:text-5xl lg:ml-10 lg:py-2 lg:text-left xl:ml-20"
        >
          TECHNOLOGY
        </p>
        <p
          className="text-2xl -mt-2 text-right mr-28 text-white font-medium
          sm:text-5xl lg:ml-10 lg:text-left xl:ml-20"
        >
          SERVICES
        </p>
      </div>
    </div>
  );
}
export default Hero;
