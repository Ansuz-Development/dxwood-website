import React, { useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";
import NextLink from "next/link";
import { useRouter } from "next/router";

const list = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Về dự án" },
  { id: "subjects", label: "Nội dung đào tạo" },
  { id: "mentors", label: "Mentor" },
  { id: "contact", label: "Liên hệ" },
];

const Footer = () => {
  const router = useRouter();

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="left">
          <h4 className="font-semibold">Sẵn sàng tham gia dự án?</h4>
          <h6 className="text-white mt-5 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </h6>
          <button type="button" className="btn button">
            Đăng ký
          </button>
        </div>

        <div className="right">
          <h6>Điều hướng</h6>
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                {router.pathname === "/" ? (
                  <Link
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
                    <a className="active">{item.label}</a>
                  </NextLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
