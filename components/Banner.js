import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Banner() {
  return (
    <div className="hidden sm:flex items-center sticky top-0 z-50 bg-blue1 space-between">
      <div className="ml-2 flex flex-grow px-2 py-2 space-x-1 lg:ml-32">
        <AiOutlineTwitter className="social" />
        <AiOutlineInstagram className="social" />
        <AiOutlineFacebook className="social" />
        <AiOutlineLinkedin className="social" />
      </div>

      <div className="flex items-center mr-8 lg:mr-36 xl:mr-44">
        <ul className="flex text-white space-x-4 text-xs">
          <li className="">Source Ally</li>
          <span className="span">·</span>
          <li>5555 NW Sunset Dr. Las Vegas, NV 55555</li>
          <span>·</span>
          <li className="">(555) 555-5555</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
