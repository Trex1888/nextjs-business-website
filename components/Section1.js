import { useState } from "react";
import data from "../data/section1";

function Section2() {
  const [cards, setcards] = useState(data);

  return (
    <section className="section-2 mx-auto md:grid md:max-w-7xl grid-cols-3 xl:mx-20">
      {cards.map((card) => {
        const { id, image, link } = card;

        return (
          <article key={id} className="text-center">
            <div className=" ">
              <img
                src={image}
                alt="card"
                className="h-80 w-72 mx-auto object-fill border-t-8 border-green-600"
              />

              <button
                className="font-semibold bg-green-500 text-white py-2 px-5 -mt-10 mb-12 
                 hover:bg-opacity-80"
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

export default Section2;
