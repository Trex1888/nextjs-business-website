import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";
import Banner from "./Banner";

function Header() {
  return (
    <>
      <Banner />
      <header
        className="fixed w-full hidden lg:flex items-center py-4 px-4 bg-blue
        top-0 z-50 md:top-10 md:z-10"
      >
        <Link href="/">
          <img
            loading="lazy"
            className="pt-2 md:inline-flex cursor-pointer h-12 w-12 rounded-full xl:ml-28"
            src="https://s.yimg.com/fz/api/res/1.2/oB.7V3B3ISUCAIKPYJN1nQ--~C/YXBwaWQ9c3JjaGRkO2g9ODE1O3E9ODA7dz05MDI-/https://s.yimg.com/bj/281e/281ecf8544bf97c024eea026e5b58d5e.jpg"
            alt="img"
          />
        </Link>

        <h1 className="flex flex-grow mt-1 md:mr-auto mx-2 text-3xl font-bold italic text-white font-serif">
          <Link href="/">source ally </Link>
        </h1>

        <Button
          color="green"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="h-14 w-14 border-0 md:hidden"
        >
          <Icon name="menu" size="3xl" />
        </Button>

        <nav
          className="hidden md:inline-flex flex-grow mt-2 px-2 items-center text-lg 
        mx-auto cursor-pointer md:ml-20 md:space-x-8 xl:space-x-20"
        >
          <ul className="nav1">
            <Link href="/partner">PARTNER WITH US</Link>
          </ul>

          <ul className="nav1">
            <Link href="/what">WHAT WE DO</Link>
          </ul>

          <ul className="nav1">
            <Link href="/about">ABOUT US</Link>
          </ul>

          <ul className="nav1">
            <Link href="/careers">CAREERS</Link>
          </ul>

          <ul className="nav1">
            <Link href="/blog">BLOGS</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
