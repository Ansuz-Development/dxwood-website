import React, { useState, useEffect, useCallback } from "react";
import { Link, scrollSpy } from "react-scroll";
import NextLink from "next/link";
import { useRouter } from "next/router";

import useMobileDetect from "../../helper/useMobileDetect";

const menuList = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Về dự án" },
  { id: "subjects", label: "Nội dung đào tạo" },
  { id: "mentors", label: "Mentor" },
  { id: "news", label: "Tin tức - Sự kiện" },
  { id: "contact", label: "Liên hệ" },
];

const Navbar = () => {
  const router = useRouter();

  const { isMobile } = useMobileDetect();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 flex items-center md:justify-center bg-white h-20 px-4">
      <ul
        className={`${
          isMobile() && isMenuOpen ? "" : "hidden"
        } absolute md:relative top-20 md:top-0 left-0 md:left-0 md:flex space-y-8 md:space-y-0 w-3/4 md:w-auto md:space-x-6 bg-white p-8 md:p-0 shadow md:shadow-none`}
      >
        {menuList.map((item) => (
          <li key={item.id}>
            {router.pathname === "/" ? (
              <Link
                className="navbar-item"
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                delay={200}
              >
                {item.label}
              </Link>
            ) : (
              <NextLink href={`/#${item.id}`}>
                <a className="navbar-item">{item.label}</a>
              </NextLink>
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 text-md text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={handleMenuClick}
        >
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5C0 0.223858 0.223858 0 0.5 0H15.5C15.7761 0 16 0.223858 16 0.5C16 0.776142 15.7761 1 15.5 1H0.5C0.223858 1 0 0.776142 0 0.5ZM0 5.5C0 5.22386 0.223858 5 0.5 5H15.5C15.7761 5 16 5.22386 16 5.5C16 5.77614 15.7761 6 15.5 6H0.5C0.223858 6 0 5.77614 0 5.5ZM0.5 10C0.223858 10 0 10.2239 0 10.5C0 10.7761 0.223858 11 0.5 11H15.5C15.7761 11 16 10.7761 16 10.5C16 10.2239 15.7761 10 15.5 10H0.5Z"
              fill="#111111"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
