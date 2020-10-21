import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PageArticles from "../components/PageArticles"


export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "homePage" } }
        sort: { fields: childMarkdownRemark___frontmatter___order, order: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              order
            }
            html
          }
        }
      }
      file(relativePath: { eq: "preschool.jpg" }) {
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
        tagLine="WHERE LEARNING IS FUN"
        showButton={true}
      />
   
      <PageArticles listOfArticles={articles} />
    </Layout>
  )
}

/* {JSON.stringify(part.childMarkdownRemark.html, null, 4)} */
