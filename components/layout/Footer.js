import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="bg-primary-500 flex justify-between h-auto md:h-80 flex-col md:flex-row">
    <div className="left">
      <p className="text-4xl text-white font-bold">Sẵn sàng tham gia dự án?</p>
      <p className="text-white mt-5 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <button type="button" className="button bg-white py-2.5 px-12 rounded-lg font-bold">
        Đăng ký
      </button>
    </div>

    <div className="flex flex-row flex-wrap md:flex-col md:justify-between mt-4 md:mt-0">
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200 mr-2">Navigation</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200 mr-2">Email Marketing</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200 mr-2">Campaigns</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200 mr-2">Branding</a>
      </Link>
      <Link href={"#"} prefetch={false}>
        <a className="text-white hover:text-pink-200 mr-2">Offline</a>
      </Link>
    </div>
  </footer>
);
export default Footer;
