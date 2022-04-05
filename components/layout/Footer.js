import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Link, scrollSpy } from "react-scroll";
import NextLink from "next/link";
import { useRouter } from "next/router";

const list = [
  { id: "home", label: "Trang chủ" },
  { id: "about", label: "Về dự án" },
  { id: "subjects", label: "Nội dung đào tạo" },
  { id: "mentors", label: "Đội ngũ chuyên gia" },
  { id: "contact", label: "Liên hệ" },
];

const Footer = ({ data }) => {
  const router = useRouter();

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <footer id="contact">
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-9 space-y-6">
              <h4 className="font-semibold">
                {data?.heading || "Sẵn sàng tham gia dự án cùng chúng tôi!"}
              </h4>
              {data?.contacts?.map((contact) => {
                return (
                  <div key={contact.id} className="space-y-2">
                    <h6>{contact.name}</h6>
                    {contact.address && <p>{contact.address}</p>}
                    {contact.phone && <p>Điện thoại: {contact.phone}</p>}
                    {contact.email && <p>Email: {contact.email}</p>}
                  </div>
                );
              })}
              <a href={data?.buttonLink} target="_blank" rel="noreferrer" className="btn btn-light">
                {data?.buttonTitle || "Đăng ký"}
              </a>
            </div>

            <div className="col-span-3 space-y-6">
              <h6>Điều hướng</h6>
              <ul className="space-y-2">
                {list.map((item) => (
                  <li key={item.id} className="cursor-pointer hover:underline">
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
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
      }),
    ),
    buttonTitle: PropTypes.string,
    buttonLink: PropTypes.string,
  }),
};

export default Footer;
