import Image from "next/image";

import SEOItem from "../components/items/SEOItem";
import renderSection from "../components/sections";

import { getHomepage, getPosts } from "../lib/api";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          placeholder="blur"
          // blurDataURL="data:..." automatically provided
        />
      </div>
      {homepage.attributes?.sections?.map((section) => {
        return <div key={section.__typename}>{renderSection(section, options)}</div>;
      })}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const homepage = (await getHomepage()) || {};
  const posts = (await getPosts()) || [];

  return {
    props: {
      homepage,
      options: { posts },
    },
    // revalidate: 60,
  };
}
