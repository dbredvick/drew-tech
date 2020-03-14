import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import UnorderedList from "@narative/gatsby-theme-novela/src/components/Lists/List.Unordered";
import GatsbyAnchor from "../components/GatsbyAnchor";
import { useStaticQuery, graphql } from "gatsby";

function NotFoundPage() {
  const data = useStaticQuery(graphql`
    query LatestArticles {
      allArticle(limit: 5, filter: { secret: { eq: false } }) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO />
      <Section style={{ zIndex: "1", position: "relative" }}>
        <div style={{ marginTop: "80px" }}>
          <Headings.h1>Oops, can't find that page.</Headings.h1>
        </div>
        <Headings.h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
          Here are some of my recent posts:
        </Headings.h4>
        <ul style={{ listStyleType: "none" }}>
          {data.allArticle.edges.map(post => {
            return (
              <li style={{ marginTop: "14px", fontSize: "20px" }}>
                <GatsbyAnchor to={post.node.slug}>
                  {post.node.title}
                </GatsbyAnchor>
              </li>
            );
          })}
        </ul>
      </Section>
    </Layout>
  );
}

export default NotFoundPage;
