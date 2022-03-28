import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>
      <section className="w-full min-h-screen">{children}</section>
    </main>
    <Footer />
  </>
);

export default Layout;
