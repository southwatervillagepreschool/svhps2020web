import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero"

const Contact = () => {
  const mainImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Hero2
        fluidImage={mainImage.file.childImageSharp.fluid}
        imageAlt=""
        tagLine="Contact Us"
      />
    </Layout>
  )
}

export default Contact
