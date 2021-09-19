import { AiOutlineRight } from "react-icons/ai";

function Values1() {
  return (
    <div
      className=" relative justify-center w-full max-w-6xl mx-auto mt-12
           mb-20 lg:mb-32"
    >
      <h2
        className="text-white text-center text-2xl pt-6 mb-2 font-normal
             lg:text-4xl lg:mt-24"
      >
        OUR EXPERTISE
      </h2>
      <button className="nav2">
        SOFTWARE DEVELOPMENT <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        QUALITY ENGINEERING <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        DEVEOPS <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        USER EXPERIENCE <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        DATA ANALYTICS <AiOutlineRight className="arrow" />
      </button>
      <button className="nav2">
        DELIVERY LEAD <AiOutlineRight className="arrow" />
      </button>
    </div>
  );
}
export default Values1;
