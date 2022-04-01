import Image from "next/image";

import SEOItem from "../../components/items/SEOItem";

import { getPosts } from "../../lib/api";

import bannerBackground from "../../assests/hero-bg.jpg";
import NewsListSection from "../../components/sections/NewsListSection";

const News = ({ news, events }) => {
  return (
    <>
      <div id="home" className="relative h-32 md:h-96">
        <Image
          src={bannerBackground}
          alt="DXWood"
          layout="fill"
          objectFit="cover"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
      <NewsListSection
        data={{
          title: "Tin tức nổi bật",
          news: news,
        }}
      />
      <NewsListSection
        data={{
          title: "Sự kiện nổi bật",
          news: events,
        }}
      />
    </>
  );
};

export default News;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  console.log("posts:", posts);

  const news = posts.filter((item) => item.attributes.category === "news");
  const events = posts.filter((item) => item.attributes.category === "event");

  return {
    props: {
      news,
      events,
    },
    // revalidate: 60,
  };
}
