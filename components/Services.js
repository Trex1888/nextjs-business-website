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
        className="text-white justify-center text-center text-2xl mt-4 mx-20
         font-semibold lg:mx-80 "
      >
        OUR AREAS OF EXPERTISE
      </h2>
      <div
        className="space-x-16 grid grid-cols-2 md:grid-cols-3
         lg:flex lg:justify-center items-center"
      >
        {/* <div className="ml-4 grid grid-cols-2 lg:inline-flex justify-center items-center"> */}

        <AiOutlineLaptop className=" text-white h-40 w-20 ml-16" />
        <h2 className="absolute top-1/4 mt-8 text-white">
          QUALITY ENGINEERING
        </h2>
        <AiOutlineBars className="text-white h-40 w-20" />

        <AiOutlineCloudUpload className="text-white h-40 w-20" />
        <h2 className="absolute top-1/2 md:py-20 mt-12 text-white">
          DEVOP/CLOUD
        </h2>
        <AiOutlineUser className="text-white h-40 w-20 mx-auto" />
        {/* <h2 className="text-white">USER EXPERIENCE</h2> */}
        <AiOutlineDatabase className="text-white h-40 w-20" />
        {/* <h2 className="text-white">DATA ANALYTICS</h2> */}
        <AiOutlineSetting className="text-white h-40 w-20" />
        {/* <h2 className="text-white">DELIEVERY LEAD</h2> */}
      </div>

      <button
        className="font-semibold bg-green-500 text-white py-4 px-16 -mb-6 align-middle 
         ml-52 hover:bg-white hover:text-green-500 transition transform duration-200 ease-out"
      >
        LEARN MORE
      </button>
    </div>
  );
}
export default Services;
