import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero"
export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "newsPage" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
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

  const parts = [...data.allFile.nodes]
  return (
    <Layout>
      <Hero2
        fluidImage={data.file.childImageSharp.fluid}
        imageAlt=""
        tagLine="WHERE LEARNING IS FUN"
      />
      {/* <pre>{JSON.stringify(parts[0], null, 4)}</pre> */}
      {parts.map(part => (
        <div
          dangerouslySetInnerHTML={{
            __html: part.childMarkdownRemark.html,
          }}
        ></div>
      ))}
    </Layout>
  )
}

/* {JSON.stringify(part.childMarkdownRemark.html, null, 4)} */
