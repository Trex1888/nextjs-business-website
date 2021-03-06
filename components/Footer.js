import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-blue1 text-center p-6">
      <h2 className="font-thin mt-8 mb-8 text-white text-xl flex items-center justify-center">
        CONTACT US <AiOutlineRight className="ml-2" />
      </h2>
      <ul className="grid md:inline-flex py-1 text-white space-x-4 text-sm justify-center mb-2">
        <li>Source Ally</li>
        <span className="hidden md:flex">·</span>
        <li>5555 NW Sunset Dr. Las Vegas, NV 55555</li>
        <span className="hidden md:flex">·</span>
        <li>(555) 555-5555</li>
      </ul>
      <div className="flex px-2 py-3 space-x-1 items-center justify-center">
        <AiOutlineTwitter className="social" />
        <AiOutlineInstagram className="social" />
        <AiOutlineFacebook className="social" />
        <AiOutlineLinkedin className="social" />
      </div>
    </div>
  );
}

export default Footer;
