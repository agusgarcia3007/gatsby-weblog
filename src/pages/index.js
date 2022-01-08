import { Link, graphql } from "gatsby";
import React from "react";
import SEO from "../components/Seo";
import Container from "../components/Container";

const Home = ({ data }) => {
  const metadata = data.site.siteMetadata;
  const siteTitle = metadata.title;
  const siteDescription = metadata.description;
  const posts = data.allMdx.nodes;

  return (
    <Container>
      <SEO title={siteTitle} description={siteDescription} />
      <h1>Weblog</h1>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <div key={post.slug} className="card">
            <Link className="card-link" to={post.slug}>
              <h1 className="card-title">{title}</h1>
              <p className="card-date">{post.frontmatter.date}</p>
              <p className="card-description">{post.frontmatter.description}</p>
            </Link>
          </div>
        );
      })}
    </Container>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }

    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "Do MMMM YYYY")
          title
          description
        }
      }
    }
  }
`;
