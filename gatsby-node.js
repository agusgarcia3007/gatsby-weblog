const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `).then((res) => {
    if (res.error) {
      throw res.error;
    }

    const posts = res.data.allMdx.nodes;
    console.log(posts);

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];

      const next = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.slug,
        component: path.resolve(`./src/templates/{mdx.slug}.js`),
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
