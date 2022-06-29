import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero2 from "../components/Hero"
import { Link } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "vacanciesPage" }
          childMarkdownRemark: { frontmatter: { order: { gt: 0 } } }
        }
        sort: { fields: childMarkdownRemark___frontmatter___order, order: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              order
              pdf
              datePosted
              id
            }
            html
            fields {
              slug
            }
          }
        }
      }
      file(relativePath: { eq: "054.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const vacancies = [...data.allFile.nodes]
  return (
    <Layout>
      <Hero2
        fluidImage={data.file.childImageSharp.fluid}
        imageAlt=""
        tagLine="Vacancies"
      />
      <article>
        <h3>We currently have the following Vacancies</h3>
        <ul>
          {vacancies.map(vacancy => (
            <li key={vacancy.childMarkdownRemark.frontmatter.title}>
              {!vacancy.childMarkdownRemark.frontmatter.pdf && (
                <Link to={`/vacancy${vacancy.childMarkdownRemark.fields.slug}`}>
                  {vacancy.childMarkdownRemark.frontmatter.title}{" "}
                </Link>
              )}
              {vacancy.childMarkdownRemark.frontmatter.pdf && (
                <a href={vacancy.childMarkdownRemark.frontmatter.pdf}>pdf</a>
              )}
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export default About
