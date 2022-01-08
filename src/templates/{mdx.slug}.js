import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Container from "../components/Container";

const BlogPost = ({ data, pageContext }) => {
  console.log(data, pageContext);
  const { body, frontmatter } = data.mdx;
  const { next, previous } = pageContext;
  return (
    <Container>
      <h1 className="post-heading">{frontmatter.title}</h1>
      <p className="post-date">{frontmatter.date}</p>
      <article className="post-body">
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={`/${previous.slug}`}>
              <button className="previous-next-button">
                {previous.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={`/${next.slug}`}>
              <button className="previous-next-button">
                {next.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
    </Container>
  );
};

export default BlogPost;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`;
