import {
  AiOutlineArrowRight,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-blue-500 text-center p-6">
      <h2 className="font-thin mt-8 mb-8 text-white text-xl flex items-center justify-center">
        CONTACT US <AiOutlineArrowRight className="ml-2" />
      </h2>

      {/* <p className="text-white font-thin text-lg space-x-4">
        Source Ally · 4501 NW Urbandale Dr. Urbandale, IA 50322 · (515) 279-264
      </p> */}
      <ul className="grid md:inline-flex py-1 text-white space-x-4 text-sm justify-center mb-2">
        <li>Source Ally</li>
        <span className="hidden md:flex">·</span>
        <li>4501 NW Urbandale Dr. Urbandale, IA 50322</li>
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
