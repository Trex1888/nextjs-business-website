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
    <div
      className="border relative border-white max-w-6xl mx-8 mt-12 mb-20 lg:mt-28
      lg:mb-36 lg:mx-20 xl:mx-auto"
    >
      <h2
        className="text-white justify-center text-center text-2xl mt-6 mx-20
         font-medium lg:mx-80 lg:mt-12"
      >
        OUR AREAS OF EXPERTISE
      </h2>
      <div
        className="space-x-12 grid grid-cols-2 md:grid-cols-3 
         md:justify-center lg:flex lg:space-x-24 lg:mb-10 mb-10"
      >
        <AiOutlineLaptop className="green text-white h-40 w-20 ml-12 lg:ml-0" />
        <h2
          className="absolute top-1/4 py-6 mt-2 bottom-3 text-white font-light
           md:mt-10 lg:left-1 lg:pt-20 lg:pr-14 lg:mt-12"
        >
          SOFTWARE <br /> DEVELOPMENT
        </h2>
        <AiOutlineBars className="green text-white h-40 w-20" />
        <h2
          className="absolute top-36 right-8 mt-16 pl-2 text-white font-light 
           md:left-72 md:mt-7 lg:top-44 lg:left-44"
        >
          QUALITY <br /> ENGINEERING
        </h2>
        <AiOutlineCloudUpload className="green text-white h-40 w-20" />
        <h2
          className="absolute top-1/2 pl-2 mt-8 text-white font-light
          md:py-20 lg:top-28 lg:mt-2 lg:pl-10 lg:left-80"
        >
          DEVOPS/ <br /> CLOUD
        </h2>
        <AiOutlineUser className="green text-white h-40 w-20" />
        <h2
          className="absolute top-1/2 right-9 mt-11 text-white font-light 
           md:top-32 md:pr-24 lg:top-40 lg:right-80 lg:pr-24"
        >
          USER <br /> EXPERIENCE
        </h2>
        <AiOutlineDatabase className="green text-white h-40 w-20" />
        <h2
          className="absolute bottom-14 pl-2 mt-9 text-white font-light
           md:left-72 lg:top-40 lg:mt-12 lg:left-80 lg:pl-96"
        >
          DATA <br /> ANALYTICS
        </h2>
        <AiOutlineSetting className="green text-white h-40 w-20" />
        <h2
          className="absolute right-20 bottom-14 pl-4 mt-9 text-white font-light
          md:py-20 md:top-56 md:right-44 lg:right-20 lg:pr-10 lg:top-12 lg:mt-20"
        >
          DATA <br /> LEAD
        </h2>
      </div>

      <button
        className="ml-32 justify-center font-semibold bg-btn text-white py-4 px-12 -mb-7
        hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        ENGINEERING
      </button>
      <button
        className="hidden md:inline-flex ml-32 justify-center font-semibold bg-btn text-white
         py-4 px-12 -mb-7 hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        DEVOPS/CLOUD
      </button>
      <button
        className="hidden lg:inline-flex ml-32 justify-center font-semibold bg-btn text-white 
         py-4 px-12 -mb-7 hover:bg-white hover:text-btn align-middle transition transform duration-200 ease-out"
      >
        DATA ANALYTICS
      </button>
    </div>
  );
}

export default Services;
