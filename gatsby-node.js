const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(( edge ) => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: edge.node.fields.slug
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: createFilePath({ node, getNode }),
    });
  }
};