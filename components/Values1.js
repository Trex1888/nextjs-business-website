import { AiOutlineRight } from "react-icons/ai";

function Values1({ title, name, name1, name2, name3, name4, name5 }) {
  return (
    <div className="relative hidden lg:block justify-center w-96 max-w-6xl mx-auto bottom-20 xl:left-96">
      <h2 className="text-white text-center text-2xl pt-6 mb-2 font-normal lg:mt-24">
        {title}
      </h2>
      <button className="nav3">
        {name} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav3">
        {name1} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav3">
        {name2} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav3">
        {name3} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav3">
        {name4} <AiOutlineRight className="arrow" />
      </button>
      <button className="nav3">
        {name5} <AiOutlineRight className="arrow" />
      </button>
    </div>
  );
}

export default Values1;
