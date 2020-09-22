import React from "react";
import { graphql } from "gatsby";

export default function Post({ data }) {
  const post = data.markdownRemark;

  return (
    <article>
      <header>{post.frontmatter.title}</header>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: {eq: $slug} }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`