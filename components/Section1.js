import { useState } from "react";
import data from "../data/section1";

function Section1() {
  const [cards, setcards] = useState(data);

  return (
    <section className="grid-cols-3 mx-auto md:grid md:max-w-7xl mb-16 lg:mb-28">
      {cards.map((card) => {
        const { id, image, link } = card;

        return (
          <article key={id}>
            <div className="text-center">
              <img
                src={image}
                loading="lazy"
                alt="card"
                className="rounded-md h-80 w-80 mx-auto object-fill border-4
                lg:h-96 lg:w-96 border-btn opacity-90"
              />

              <button
                className="font-semibold bg-btn text-white py-4 px-16 -mt-7 mb-6 align-middle
                 hover:bg-white hover:text-btn transition transform duration-200 ease-out"
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
