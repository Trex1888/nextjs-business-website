import { useState } from "react";
import data from "../data/micro";

function Micro() {
  const [cards, setCards] = useState(data);

  return (
    <section className="md:grid grid-cols-2 xl:grid-cols-6 my-8 xl:mx-20">
      {cards.map((card) => {
        const { id, text, shit, image } = card;

        return (
          <article key={id} className="flex items-center px-6 py-2">
            <img src={image} alt="card" className="text-white" />
            {/* <p className="text-white">{shit}</p> */}
            <p className="mx-3 font-semibold cursor-pointer text-white hover:underline">
              {text}
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default Micro;
