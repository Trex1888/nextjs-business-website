import { useState } from "react";
import data from "../data/pics";

function Pics() {
  const [cards, setcards] = useState(data);

  return (
    <section
      className="grid grid-cols-2 lg:grid-cols-4 mb-20 space-x-2 mx-10
      md:mx-56 md:grid md:max-w-7xl lg:mb-28 lg:mx-6 xl:mx-auto md:col-span-2"
    >
      {cards.map((card) => {
        const { id, image, link } = card;
        return (
          <article key={id}>
            <div>
              <img
                src={image}
                loading="lazy"
                alt="card"
                className="rounded-md h-48 w-56 mx-auto object-fill border-4 border-btn 
                opacity-90 mb-4 md:h-68 md:w-60 lg:h-72 lg:w-80"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Pics;
