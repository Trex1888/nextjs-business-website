import { useState } from "react";
import data from "../data/section1";

function Section1() {
  const [cards, setcards] = useState(data);

  return (
    <section className="section-2 grid-cols-3 mx-auto md:grid md:max-w-7xl md:mx-20">
      {cards.map((card) => {
        const { id, image, link } = card;

        return (
          <article key={id} className="text-center">
            <div>
              <img
                src={image}
                loading="lazy"
                alt="card"
                className="rounded-md h-80 w-80 mx-auto object-fill border-4
                lg:h-96 lg:w-96 xl:ml-20 border-green-600"
              />

              <button
                className="font-semibold bg-green-500 text-white lg:ml-24 py-4 px-16 -mt-7 mb-6 
                 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
              >
                {link}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Section1;
