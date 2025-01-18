import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-white dark:bg-black border-t dark:border-gray-700 mt-auto">
      <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Javy | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
