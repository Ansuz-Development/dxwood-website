import Image from "next/image";
import Head from "next/head";
import SEOItem from "../components/items/SEOItem";
import renderSection from "../components/sections";

import { getHomepage, getLatestPosts } from "../lib/api";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerBackground from "../assests/hero-bg.jpg";

const Home = ({ homepage, options }) => {
  return (
    <>
      <Head>
        <title>CIO ngành gỗ</title>
      </Head>
      <SEOItem seo={homepage.attributes?.seo} />
      <div id="home" className="relative h-32 md:h-96">
        <Image
          src={bannerBackground}
          alt="DXWood"
          layout="fill"
          objectFit="cover"
          priority={true}
          placeholder="blur"
          // blurDataURL="data:..." automatically provided
        />
      </div>
      {homepage.attributes?.sections?.map((section, index) => (
        <div key={index}>{renderSection(section, options)}</div>
      ))}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const homepage = (await getHomepage()) || {};
  const posts = (await getLatestPosts()) || [];

  return {
    props: {
      homepage,
      options: { posts },
    },
    // revalidate: 60,
  };
}
