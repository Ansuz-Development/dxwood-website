import React from "react";
import { getPostBySlug, getPostSlugs } from "../../lib/api";
import SEOItem from "../../components/items/SEOItem";

const Post = ({ post }) => {
  return (
    <>
      <SEOItem seo={post.attributes?.seo} />
      <main>
        <h1>{post.attributes.title}</h1>
      </main>
    </>
  );
};

Post.propTypes = {};

export default Post;

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  console.log(post);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    // revalidate: 60,
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  const paths = postSlugs?.map((post) => `/post/${post.attributes.slug}`);

  return {
    paths: paths || [],
    fallback: "blocking",
  };
}
