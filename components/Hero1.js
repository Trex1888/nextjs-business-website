import Image from "next/image";

function Hero1({ name, name1, img }) {
  return (
    <div className="relative top-10 mb-36 w-full border-b-8 border-btn h-[400px]">
      <Image
        loading="lazy"
        src={img}
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      <div className="absolute top-1/3 w-full text-center opacity-100">
        <h2 className="text-4xl text-white font-light mb-2 leading-relaxed">
          {name}
        </h2>
        <h2 className="text-5xl text-white font-normal leading-relaxed">
          {name1}
        </h2>
      </div>
    </div>
  );
}

export default Hero1;
