import { AiOutlineRight } from "react-icons/ai";

function Values({ title, name, name1, name2, name3, name4, name5 }) {
  return (
    <div
      className=" relative justify-center w-full max-w-6xl mx-auto mt-12
       mb-20 lg:mb-32"
    >
      <h2 className="text-white text-center text-2xl pt-6 mb-2 font-normal lg:mt-24">
        {title}
      </h2>
      <button className="nav2">
        {name} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        {name1} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        {name2} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        {name3} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        {name4} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        {name5} <AiOutlineRight className="arrow" />
      </button>
    </div>
  );
}

export default Values;
