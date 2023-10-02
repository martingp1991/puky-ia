import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";

import Switch from "./Switch";
import Tickets from "./Tickets";
import Login from "./Login";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-20 px-1 bg-zinc-200 dark:bg-zinc-900 transition-background ">
        <div className="sticky top-0 z-20 flex items-center justify-between w-full px-4 py-3 h-14">
          <a href="/" className="flex items-center gap-2">
            <img
              src="https://ph-files.imgix.net/2c7b17e3-7a6d-4872-ab81-471803a924ce.png?auto=format"
              className="h-10 mr-3 icon dark:invert"
              alt="Logo"
            />
          </a>
          <div
            className="flex items-center gap-4 md:w-[200px] justify-end"
            ref={dropdownRef}
          >
            <div className="px-3 py-1 text-xs font-bold rounded-full bg-zinc-300 dark:bg-green-200 dark:shadow-lg dark:shadow-green-500/50">
              Private Alpha
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors border rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <HiOutlineMenuAlt4 className="w-4 h-4 dark:invert " />
            </button>

            <div
              className={`absolute right-4 z-50 w-48 mt-3 transition-opacity duration-300 ease-in-out bg-white dark:bg-zinc-800 divide-gray-100 rounded-lg shadow-lg ${isDropdownOpen
                ? "opacity-100 max-h-[500px] dark:shadow-md dark:shadow-zinc-700/50"
                : "opacity-0 max-h-0 overflow-hidden"
                } top-full dark:divide-gray-200`}
            >
              <div className="flex items-center mt-4 ml-2">
                <a href="#" className="flex items-center gap-x-2">
                  <img className="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">johndoe@test.com</span>
                </a>
              </div>
              <ul className="py-2">

                <hr className="my-1 border-zinc-300 dark:border-zinc-600" />

                <li className="flex items-center">
                  <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-400" href="#">
                    <BsCheck2 className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Waitlist requested</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <Login />
                </li>

                <hr className="my-1 border-zinc-300 dark:border-zinc-600" />

                <li className="flex items-center">
                  <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-400" href="#">
                    <AiOutlineAppstoreAdd className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">Explore</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <Tickets />
                </li>

                <hr className="my-1 border-zinc-300 dark:border-zinc-600" />

                <li className="flex items-center">
                  <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-400" href="#">
                    < FaQuestionCircle className="w-5 h-5" />
                    <span className="mx-2 text-sm font-medium">FAQs</span>
                  </a>
                </li>
              </ul>
              <li className="flex items-center">
                <Switch />
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
