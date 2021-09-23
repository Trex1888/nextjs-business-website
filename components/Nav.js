import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-blue flex flex-wrap items-center
     justify-between px-2 py-3 mb-1"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          className="w-full text-white relative  flex justify-between 
        lg:w-auto lg:static lg:block lg:justify-start top-2"
        >
          <Link
            className="text-sm font-bold items-center leading-relaxed 
            inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href=""
          >
            teal Tailwind Starter Kit
          </Link>
          <Button
            color="white"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-14 w-14 border-0 md:hidden text-white"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon name="menu" size="3xl" />
          </Button>
          {/* <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 
            border border-solid border-transparent rounded bg-transparent block 
            lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button> */}
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
             
                
                
            <Link href="/partner" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <AiOutlineTwitter className="social"
                 />
               
                <span className="ml-2 ">Share</span> </Link>
             
            </li>
            <li className="nav-item"> 
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Tweet</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Pin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
