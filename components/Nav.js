import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-blue flex flex-wrap items-center
     justify-between px-2 py-3 lg:hidden"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full text-white relative flex justify-between md:mx-auto">
          <Link href="/">
            <img
              loading="lazy"
              className="pt-2 md:inline-flex cursor-pointer h-12 w-12 rounded-full"
              src="https://s.yimg.com/fz/api/res/1.2/oB.7V3B3ISUCAIKPYJN1nQ--~C/YXBwaWQ9c3JjaGRkO2g9ODE1O3E9ODA7dz05MDI-/https://s.yimg.com/bj/281e/281ecf8544bf97c024eea026e5b58d5e.jpg"
              alt="img"
            />
          </Link>
          <h1 className="flex flex-grow mt-1 md:mr-auto mx-2 text-3xl font-bold italic text-white font-serif">
            <Link href="/">source ally </Link>
          </h1>

          <Button
            color="white"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-10 w-10 pt-2 border-0 text-white hover:opacity-90 md:ml-auto lg:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon name="menu" size="3xl" />
          </Button>
        </div>

        <div
          className={
            "flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="mx-auto text-center pt-6 lg:hidden">
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
