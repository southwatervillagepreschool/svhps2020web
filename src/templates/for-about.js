import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

const ForAbout = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Layout>
        <Hero
          fluidImage={data.file.childImageSharp.fluid}
          imageAlt=""
          tagLine={ post.frontmatter.title}
        />
        <article>
          {/* working {JSON.stringify(data)} */}
          {/* <h2>{post.frontmatter.title}</h2> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>
      </Layout>
    </div>
  )
}

export default ForAbout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }

    file(relativePath: { eq: "037.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
