import React, { useState, useEffect, useCallback } from "react";
import { Link, scrollSpy } from "react-scroll";

import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";

import logos from "../../assests/dxwood-logo.jpg";

const menuList = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Về dự án" },
  { id: "subjects", label: "Nội dung đào tạo" },
  { id: "mentors", label: "Đội ngũ chuyên gia" },
  { id: "news", label: "Tin tức - Sự kiện" },
  { id: "contact", label: "Liên hệ" },
];

const Navbar = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="navbar-container">
      <nav className="container h-full">
        <div className="h-full flex items-center justify-between md:justify-center lg:justify-between">
          <div className="image-container">
            <Image src={logos} alt="DXWood" priority={true} placeholder="blur" />
          </div>
          <ul className={`${isMenuOpen ? "" : "hidden"} navbar`}>
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
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
