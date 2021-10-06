import { useState } from "react";
import data from "../data/scroll";

function Scroller() {
  const [cards, setcards] = useState(data);

  return (
    <section className="flex space-x-20 pr-28">
      {cards.map((card) => {
        const { id, image } = card;
        return (
          <article key={id}>
            <div>
              <img
                src={image}
                loading="lazy"
                alt="card"
                className="rounded cursor-pointer mx-auto object-fill
                opacity-90 my-4 h-20 w-36"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Scroller;
