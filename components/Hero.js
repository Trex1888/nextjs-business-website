import Image from "next/image";
import four from "../images/four.jpg";

function Hero() {
  return (
    <div
      className="relative mt-20 mb-20 rounded-2xl shadow-md border-b-8 border-btn h-[300px] 
     sm:h-[400px] lg:h-[500px] lg:mx-32 lg:mt-12"
    >
      <Image
        loading="lazy"
        src={four}
        layout="fill"
        objectFit="cover"
        className="opacity-80 "
      />

      <div className="absolute bottom-1/2 w-full text-center">
        <p
          className="text-xl text-left text-white font-normal
           ml-4 mb-2 sm:text-3xl md:mb-6 lg:ml-10 xl:ml-20 "
        >
          Your Partner <br /> For Building
        </p>
        <p
          className="text-2xl text-left ml-4 text-white font-normal
         sm:text-4xl lg:ml-10 xl:ml-20 "
        >
          TECHNOLOGY <br />
          SERVICES
        </p>
      </div>
    </div>
  );
}
export default Hero;
