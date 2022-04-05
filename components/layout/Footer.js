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
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="col-span-9 space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Sẵn sàng tham gia dự án cùng chúng tôi!</h4>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </h6>
              </div>
              <button className="btn btn-light">Đăng ký</button>
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
export default Footer;
