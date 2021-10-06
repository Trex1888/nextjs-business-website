import { useState } from "react";
import data from "../data/section3";

function Section3() {
  const [cards, setcards] = useState(data);

  return (
    <section className="section-2 grid-cols-3 mx-auto md:grid md:max-w-7xl mb-24 lg:mb-32">
      {cards.map((card) => {
        const { id, image, title, info } = card;

        return (
          <article key={id} className="text-center">
            <div>
              <img
                src={image}
                loading="lazy"
                alt="card"
                className="rounded-md h-80 w-80 mx-auto object-fill border-4
                lg:h-96 lg:w-96 border-btn opacity-90"
              />

              <button className="big">
                {title} <br /> <br />
                {info}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Section3;
