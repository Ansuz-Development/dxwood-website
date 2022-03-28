import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer
    style={{
      height: "20rem",
      padding: "4.25rem 4.5rem 4.5rem 4.5rem",
    }}
    className="bg-black flex justify-between"
  >
    <div>
      <p className="text-4xl text-white font-bold">Sẵn sàng tham gia dự án?</p>
      <p className="text-white mt-5 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button type="button" className="button bg-white py-2.5 px-12 rounded-lg font-bold">
        Đăng ký
      </button>
    </div>

    <div className="flex flex-col justify-between">
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200">Navigation</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200">Email Marketing</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200">Campaigns</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200">Branding</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200">Offline</a>
      </Link>
    </div>
  </footer>
);
export default Footer;
