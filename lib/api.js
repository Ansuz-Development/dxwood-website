const token = process.env.STRAPI_API_TOKEN;

async function fetchAPI(query, { variables } = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getHomepage = async () => {
  const data = await fetchAPI(
    `
    query {
      homepage {
        data {
          attributes {
            seo {
              metaTitle
              metaDescription
              metaImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              keywords
              canonicalURL
              metaSocial {
                socialNetwork
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            sections {
              __typename
              ... on ComponentSectionsAboutSection {
                title
                description
                cover {
                  data {
                    attributes {
                      url
                      formats
                    }
                  }
                }
                steps {
                  label
                  title
                  isCurrent
                }
              }
              ... on ComponentSectionsEventSection {
                title
                description
              }
              ... on ComponentSectionsMentorSection {
                title
                description
                mentors {
                  name
                  title
                  description
                  avatar {
                    data {
                      attributes {
                        url
                        formats
                      }
                    }
                  }
                }
              }
              ... on ComponentSectionsBenefitSection {
                title
                description
                buttonLink
                buttonTitle
                benefits {
                  title
                  description
                  icon {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
              ... on ComponentSectionsCompanySection {
                title
                description
                companies {
                  name
                  homepage
                  logo {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
              ... on ComponentSectionsSubjectSection {
                title
                description
                downloadButtonTitle: buttonTitle
                contentFile {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                subjects {
                  heading
                  title
                  description
                  cover {
                    data {
                      attributes {
                        url
                        formats
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    {},
  );

  return data?.homepage.data;
};

export const getPosts = async () => {
  const data = await fetchAPI(
    `
    query {
      posts {
        data {
          id
          attributes {
            title
            brief
            slug
            category
            cover {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
          }
        }
      }
    }
    `,
    {},
  );

  return data?.posts.data;
};

export const getLatestPosts = async () => {
  const data = await fetchAPI(
    `
    query {
      posts(pagination: {limit: 4}, sort:"publishedAt:desc") {
        data {
          id
          attributes {
            title
            brief
            slug
            category
            cover {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
          }
        }
      }
    }
    `,
    {},
  );

  return data?.posts.data;
};

export const getPostSlugs = async () => {
  const data = await fetchAPI(
    `
    query {
      posts(sort:"publishedAt:desc") {
        data {
          id
          attributes {
            slug
          }
        }
      }
    }
    `,
    {},
  );

  return data?.posts.data;
};

export const getPostBySlug = async (slug) => {
  const data = await fetchAPI(
    `
    query getPostBySlug($slug: String) {
      posts(filters: {slug: {eq: $slug}}) {
        data {
          id
          attributes {
            title
            content
            brief
            slug
            category
            createdAt
            publishedAt
            cover {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
            tags {
              data {
                id
                attributes {
                  name
                  slug
                }
              }
            }
            seo {
              metaTitle
              metaDescription
              metaImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              keywords
              canonicalURL
              metaSocial {
                socialNetwork
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        slug,
      },
    },
  );

  return data?.posts.data?.[0];
};

export const getRelatedPosts = async (postId, tagIds) => {
  const data = await fetchAPI(
    `
    query postsByTags($postId: ID, $tags: TagFiltersInput) {
      posts(filters:{id: {ne: $postId}, tags: $tags}, sort:"publishedAt:desc") {
        data {
          id
          attributes {
            title
            brief
            slug
            category
            createdAt
            publishedAt
            cover {
              data {
                attributes {
                  url
                  formats
                }
              }
            }
          }
        }
      }
    }
    `,
    {
      variables: {
        postId,
        tags: { id: { in: tagIds } },
      },
    },
  );

  return data?.posts.data;
};

export const getFooter = async () => {
  const data = await fetchAPI(
    `
    query {
      footer {
        data {
          attributes {
            heading
            contacts {
              id
              name
              address
              phone
              email
            }
            buttonLink
            buttonTitle
          }
        }
      }
    }
    `,
    {},
  );

  return data?.footer.data;
};
