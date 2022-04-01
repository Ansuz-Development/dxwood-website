import React, { useEffect } from "react";

import { Link, scrollSpy } from "react-scroll";

const list = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Về dự án" },
  { id: "subjects", label: "Nội dung đào tạo" },
  { id: "mentors", label: "Mentor" },
  { id: "news", label: "Tin tức - Sự kiện" },
  { id: "contact", label: "Liên hệ" },
];

const Footer = () => {
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
