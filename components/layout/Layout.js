import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Layout = ({ children }) => {
  const { data } = useSWR("/api/footer", fetcher);

  return (
    <>
      <Head>
        <title>CIO ngành gỗ</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer data={data?.attributes} />
    </>
  );
};

export default Layout;
