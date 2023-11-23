import Link from "next/link";
import MenuItem from "./MenuItem";
import { IoIosHome } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between items-center mx-2 py-6 max-w-6xl sm:mx-auto">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={IoIosHome} />
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={IoInformationCircleSharp}
        />
      </div>
      <div className="flex space-x-5 items-center">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
