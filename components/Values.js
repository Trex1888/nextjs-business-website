import { AiOutlineRight } from "react-icons/ai";

function Values() {
  return (
    <div
      className=" relative justify-center w-full max-w-6xl mx-auto mt-12
     mb-20 lg:mb-32"
    >
      <h2
        className="text-white text-center text-2xl pt-6 lg:mt-36
         mb-2 font-normal"
      >
        OUR CORE VALUES
      </h2>
      <button className="nav2">
        BE A TEACHER <AiOutlineRight className="arrow" />
      </button>

      <button className="nav2">
        BE A LEADER <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        BE AN EXPERT <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        BE AN OWNER <AiOutlineRight className="arrow" />
      </button>
    </div>
  );
}

export default Values;
