import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-blue flex flex-wrap items-center
     justify-between px-2 py-3 mb-1 lg:hidden"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          className="w-full text-white relative flex justify-between md:mx-auto
        lg:w-auto lg:static lg:block lg:justify-start top-2"
        >
          <Link
            className="text-sm font-bold items-center leading-relaxed 
            inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="/"
          >
            Source Ally
          </Link>
          <Button
            color="white"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-14 w-14 border-0 text-white md:ml-auto lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon name="menu" size="3xl" />
          </Button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="mx-auto text-center lg:hidden ">
            <li>
              <h2 className="mobile">
                <Link href="/partner">PARTNER WITH US</Link>
              </h2>{" "}
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/what">WHAT WE DO</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/about">ABOUT US</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/careers">CAREERS</Link>
              </h2>
            </li>

            <li>
              <h2 className="mobile">
                <Link href="/blog">BLOGS</Link>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
