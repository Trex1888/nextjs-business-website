import Image from "next/image";
import what from "../images/what.jpg";

function Hero3() {
  return (
    <div
      className="relative w-full border-b-8 border-btn h-[400px] 
      "
    >
      <Image
        loading="lazy"
        src={what}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      <div className="absolute top-1/3 w-full text-center opacity-100">
        <h2 className="text-4xl text-white font-light mb-2">
          We Solve Complex Problems with
        </h2>
        <h2 className="text-5xl text-white font-normal">SOFTWARE SOLUTIONS</h2>
      </div>
    </div>
  );
}
export default Hero3;
