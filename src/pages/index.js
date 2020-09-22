import React from "react"
import { Link, graphql } from "gatsby";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      {posts.map(({ node }) => (
        <article id={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </article>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
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
`