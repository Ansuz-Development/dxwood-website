import Image from "next/image";

import SEOItem from "../components/items/SEOItem";
import renderSection from "../components/sections";

import { getHomepage, getPosts } from "../lib/api";

import "swiper/css";
import "swiper/css/navigation";

import bannerBackground from "../assests/hero-bg.jpg";

const Home = ({ homepage, options }) => {
  return (
    <>
      <SEOItem seo={homepage.attributes?.seo} />
      <div id="home" className="relative h-32 md:h-96">
        <Image
          src={bannerBackground}
          alt="DXWood"
          layout="fill"
          objectFit="cover"
          priority={true}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <div className="container">
        {homepage.attributes?.sections?.map((section) => {
          return <div key={section.__typename}>{renderSection(section, options)}</div>;
        })}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const homepage = (await getHomepage()) || {};
  const posts = (await getPosts()) || [];

  console.log("home:", homepage, posts);

  return {
    props: {
      homepage,
      options: { posts },
    },
    // revalidate: 60,
  };
}
