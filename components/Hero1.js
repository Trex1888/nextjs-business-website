import Image from "next/image";

function Hero1({ name, name1, img }) {
  return (
    <div
      className="relative top-0 mb-32 w-full border-b-8
     border-btn h-[400px] lg:mb-36"
    >
      <Image
        loading="lazy"
        src={img}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      <div className="absolute top-1/3 w-full text-center opacity-100">
        <h2 className="text-3xl lg:text-4xl text-white font-light leading-tight">
          {name}
        </h2>
        <h2 className="text-4xl lg:text-5xl text-white font-medium pt-2 leading-tight">
          {name1}
        </h2>
      </div>
    </div>
  );
}

export default Hero1;
