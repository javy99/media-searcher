import React  from "react";
import ModeToggle from "./ModeToggle";
import { ScanSearch } from "lucide-react";


const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-5 py-3 flex justify-between items-center border-b dark:border-gray-700 bg-white dark:bg-black">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Media Searcher
        </h1>
        <ScanSearch className="!h-8 !w-8 " />
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
