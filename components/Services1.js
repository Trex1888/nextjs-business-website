import { useState } from "react";
import data from "../data/services1";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

function Services1() {
  const [cards, setcards] = useState(data);

  return (
    <div
      className="border relative border-white max-w-6xl mx-8 mt-6 mb-20 lg:mt-28
      lg:mb-36 lg:mx-20 xl:mx-auto"
    >
      <h2 className="text-white mx-auto text-center text-2xl py-6">
        OUR PROCESS
      </h2>
      <div className="grid md:px-2 md:flex mb-16">
        {cards.map((card) => {
          const { id, image, title, title1, info, line } = card;

          return (
            <article key={id} className="md:px-2 md:mr-5 xl:mr-10">
              <div className="px-20 md:px-2">
                <img
                  src={image}
                  loading="lazy"
                  alt="card"
                  className="rounded-md h-72 w-64 mx-auto object-fill border-4
                  md:h-28 md:w-36 lg:h-52 lg:w-40 border-btn opacity-90"
                />
              </div>
              {/* <AiOutlineRight className="hidden lg:inline-flex relative left-72 top-24 text-white text-3xl mb-2" /> */}

              <div className="px-20 md:px-2">
                <h2 className="text-white mx-auto text-center leading-snug pt-2 text-xl font-light">
                  {title}
                </h2>
                <h2 className="text-white mx-auto text-center leading-snug -mt-1 text-xl font-light">
                  {title1}
                </h2>

                <hr className="py-2 mt-2" />

                <h2 className="text-white mx-auto text-center px-2 text-lg pb-2 font-light">
                  {info}
                </h2>
                <AiOutlineDown className="md:hidden mx-auto text-white text-3xl mb-2" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Services1;
