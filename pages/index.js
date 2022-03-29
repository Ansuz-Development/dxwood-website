import SEOItem from "../components/items/SEOItem";
import renderSection from "../components/sections";

import { getHomepage, getPosts } from "../lib/api";

const Home = ({ homepage, options }) => {
  return (
    <div>
      <SEOItem seo={homepage.attributes?.seo} />
      <main>
        {/* <h1>{options.posts.length}</h1> */}
        {homepage.attributes?.sections?.map((section) => {
          return <div key={section.__typename}>{renderSection(section, options)}</div>;
        })}
      </main>
    </div>
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
