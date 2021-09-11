import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative lg:border-b-8 border-green-500 h-[300px] sm:h-[400px] lg:h-[500px] lg:mx-32 xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://cdn.dribbble.com/users/1857592/screenshots/3848396/character-typing.gif"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/4 w-full text-center">
        <p
          className="text-l sm:text-3xl text-left ml-2 mb-2 lg:ml-10 xl:ml-20
           md:mb-6 text-green-500 font-normal"
        >
          Your Partner <br /> For Building
        </p>
        <p className="text-2xl sm:text-4xl text-left ml-2 lg:ml-10 xl:ml-20 text-red-500 font-normal">
          TECHNOLOGY <br />
          SERVICES
        </p>
        {/* <button
          className="text-white bg-green-500 px-10 py-4 shadow-md rounded-full 
           font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          LEARN MORE
        </button> */}
      </div>
    </div>
  );
}
export default Hero;
