import {
  AiOutlineBars,
  AiOutlineCloudUpload,
  AiOutlineDatabase,
  AiOutlineLaptop,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

function Services() {
  return (
    <div className="border relative border-white max-w-6xl mx-auto mt-12 mb-20 lg:mt-28">
      <h2
        className="text-white justify-center text-center text-2xl mt-6 lg:mt-12 mx-20
         font-semibold lg:mx-80 "
      >
        OUR AREAS OF EXPERTISE
      </h2>
      <div
        className="space-x-12 grid grid-cols-2 md:grid-cols-3 
         md:justify-center lg:flex lg:space-x-24 lg:mb-10 mb-10"
      >
        {/* <div className="ml-4 grid grid-cols-2 lg:inline-flex justify-center items-center"> */}
        {/* className="space-x-12 grid grid-cols-2 md:grid-cols-3 */}
        <AiOutlineLaptop className="green text-white h-40 w-20 ml-12 lg:ml-0" />
        <h2
          className="absolute top-1/4 mt-12 bottom-3 text-white md:pt-10 
           lg:left-1 lg:pt-20 lg:pr-14"
        >
          SOFTWARE <br /> DEVELOPMENT
        </h2>
        <AiOutlineBars className="green text-white h-40 w-20" />
        <h2
          className="absolute top-36 right-8 mt-14 pl-2 text-white md:py-20 
           lg:top-16 lg:left-44"
        >
          QUALITY <br /> ENGINEERING
        </h2>
        <AiOutlineCloudUpload className="green text-white h-40 w-20" />
        <h2
          className="absolute top-1/2 pl-2 mt-11 text-white md:py-20
           lg:top-20 lg:pl-10 lg:left-80"
        >
          DEVOPS/ <br /> CLOUD
        </h2>
        <AiOutlineUser className="green text-white h-40 w-20" />
        <h2
          className="absolute top-1/2 right-9 mt-11 text-white md:py-20 
           lg:right-96 lg:pr-9 lg:top-20"
        >
          USER <br /> EXPERIENCE
        </h2>
        <AiOutlineDatabase className="green text-white h-40 w-20" />
        <h2
          className="absolute bottom-14 pl-2 mt-9 text-white md:py-20 
          lg:pr-4 lg:top-20 lg:right-60 lg:mt-12"
        >
          DATA <br /> ANALYTICS
        </h2>
        <AiOutlineSetting className="green text-white h-40 w-20" />
        <h2
          className="absolute right-20 bottom-14 pl-4 md:py-20 mt-9 text-white 
           lg:pr-8 lg:top-20 lg:mt-12"
        >
          DATA <br /> LEAD
        </h2>
      </div>

      {/* <button
        className="font-semibold bg-green-500 text-white py-4 px-16 mt-8 -mb-6 align-middle
         ml-52 hover:bg-white hover:text-green-500 transition transform duration-200 ease-out"
      >
        LEARN MORE
      </button> */}

      <button
        className="ml-32 justify-center font-semibold bg-green-500 text-white py-4 px-12 -mb-7
        hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        ENGINEERING
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        DEVOPS/CLOUD
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-green-500 text-white 
         py-4 px-12 -mb-7 hover:bg-white hover:text-green-500 align-middle transition transform duration-200 ease-out"
      >
        DATA ANALYTICS
      </button>
    </div>
  );
}
export default Services;
