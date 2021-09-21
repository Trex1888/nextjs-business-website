import Image from "next/image";
import four from "../images/four.jpg";

function Hero() {
  return (
    <div
      className="relative border-b-8 border-btn h-[300px] 
     sm:h-[400px] lg:h-[500px] lg:mx-32 xl:h-[600px] 2xl:h-[700px]"
    >
      <Image
        loading="lazy"
        src={four}
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />

      <div className="absolute bottom-1/2 w-full text-center">
        <p
          className="text-xl text-left text-white font-normal
           ml-2 mb-2 sm:text-3xl md:mb-6 lg:ml-10 xl:ml-20 "
        >
          Your Partner <br /> For Building
        </p>
        <p
          className="text-2xl text-left ml-2 text-white font-normal
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
