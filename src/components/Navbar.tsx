import React  from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full mb-4 p-4 flex justify-between items-center border-b dark:border-gray-800 bg-white dark:bg-black">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Media Searcher
      </h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
