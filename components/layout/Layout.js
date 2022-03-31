import React from "react";

import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>DxWood</title>
      <meta name="author" content="AnsuzDev" />
      <meta name="copyright" content="AnsuzDev" />
      <meta name="theme-color" content="#fff" />
      <meta charSet="utf-8" />

      <meta name="author" content="AnsuzDev" />
      <meta name="copyright" content="AnsuzDev" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
