import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

export default function Post({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Helmet>
      <article>
        <header>{post.frontmatter.title}</header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </>
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