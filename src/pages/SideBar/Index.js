import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
const SideBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 dark:text-gray-400 dark:hover:bg-black "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full pr-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/task"
                className={`${
                  activeButton === "Task" ? "bg-black text-white" : "text-black"
                }
                            flex items-center p-2  rounded-r-full text-black hover:text-white hover:bg-black                             " `}
                onClick={() => setActiveButton("Task")}
              >
                <BsListTask size={25} />
                <span className="ml-3 text-lg font-medium font-['Inter'] capitalize">
                  Task
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className={` ${
                  activeButton === "Location"
                    ? "text-white bg-black"
                    : "text-black"
                } flex items-center p-2  rounded-r-full text-black hover:text-white dark:hover:bg-black hover:bg-gray-100 group 
                            0 focus:hover:bg-gray-700  `}
              >
                <CiLocationOn
                  size={25}
                  fill={activeButton === "Location" ? "white" : "black"}
                />
                <span className="ml-3 text-lg font-medium font-['Inter'] capitalize">
                  Location
                </span>
              </Link>
            </li>
            <li>
              <div className="mt-[460px]">
                <a
                  href="/"
                  className="flex items-center p-2  rounded-r-full text-black hover:text-white dark:hover:bg-black text-stone-300hover:bg-gray-100 
                            group  active:hover:bg-gray-70
                            0 focus:hover:bg-gray-700  "
                >
                  <LuLogOut size={25} />
                  <span className="ml-3 text-lg font-medium font-['Inter'] capitalize">
                    Logout
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
