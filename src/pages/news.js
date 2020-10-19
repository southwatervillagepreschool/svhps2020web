import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import NewsArticles from "../components/NewsArticles"

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "newsPage" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              date
              author
            }
            html
          }
        }
      }
      file(relativePath: { eq: "005.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const articles = [...data.allFile.nodes]
  return (
    <Layout>
      <Hero
        fluidImage={data.file.childImageSharp.fluid}
        imageAlt=""
        tagLine="News"
      />
      <NewsArticles listOfArticles={articles} />
    </Layout>
  )
}

export default News
