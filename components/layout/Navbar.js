import React from "react";

const list = ["Home", "Về dự án", "Nội dung đào tạo", "Mentor", "Tin tức - Sự kiện", "Contact"];

const Navbar = () => (
  <nav
    className="bg-transparent p-5 rounded border border-dashed border-blue-500"
    style={{
      height: "96px",
    }}
  >
    <div className="bg-gray-100 h-full hidden md:block">
      <div className="container mx-auto h-full flex-1">
        <ul className="flex flex-row items-center justify-evenly h-full">
          {list.map((e) => (
            <li key={e}>
              <a href="#" className="block text-gray-700  hover:text-blue-700">
                {e}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="md:hidden">
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex items-center p-2 text-md text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
);
export default Navbar;
