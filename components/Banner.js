import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Banner() {
  return (
    <div className="hidden sm:flex items-center sticky top-0 z-50 bg-blue-500 ">
      <div className="ml-2 flex flex-grow px-2 py-2 space-x-1 lg:ml-32">
        <AiOutlineTwitter className="social" />
        <AiOutlineInstagram className="social" />
        <AiOutlineFacebook className="social" />
        <AiOutlineLinkedin className="social" />
      </div>

      <div className="items-center mr-8 sm:flex lg:mr-48">
        <ul className="flex text-white space-x-4 text-xs ">
          <li className="">Source Ally</li>
          <span className="span">·</span>
          <li>4501 NW Urbandale Dr. Urbandale, IA 50322</li>
          <span>·</span>
          <li className="">(555) 555-5555</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
