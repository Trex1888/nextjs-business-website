import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center py-2 sticky top-0 z-50 px-4 shadow-md bg-blue">
      <img
        loading="lazy"
        className="md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2 lg:ml-28"
        src="https://s.yimg.com/fz/api/res/1.2/oB.7V3B3ISUCAIKPYJN1nQ--~C/YXBwaWQ9c3JjaGRkO2g9ODE1O3E9ODA7dz05MDI-/https://s.yimg.com/bj/281e/281ecf8544bf97c024eea026e5b58d5e.jpg"
        alt="img"
      />
      <h1 className="flex flex-grow md:mr-auto mx-2 text-xl font-bold italic text-white font-serif">
        Source Ally
      </h1>

      <Button
        color="green"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0 md:hidden"
      >
        <Icon name="menu" size="3xl" />
      </Button>

      <nav
        className="hidden md:inline-flex flex-grow py-4 px-2 items-center font-bold 
         text-xl mx-auto cursor-pointer lg:ml-8 lg:space-x-20"
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
          <Link href="/blog">OUR BLOGS</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
