import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero2 from "../components/Hero"
// import PageArticles from "../components/PageArticles"
import { Link } from "gatsby"

// import ArticleList from "../components/ArticleList"
// import { NavDispatchContext } from "../NavigationProviders"

const About = () => {
  // const navStatus = useContext(NavContext)
  // const setNavStatus = useContext(NavDispatchContext)

  // console.log("status:", navStatus)
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "vacanciesPage" } }
        sort: { fields: childMarkdownRemark___frontmatter___order, order: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              order
              pdf
            }
            html
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
        {/* <PageArticles listOfArticles={articles} /> */}
        <p>
          Due to current COVID-19 restrictions we are unable to offer visits but
          there is a <Link to="/virtual-tour">virtual tour</Link>.
        </p>

        <ul>
          {vacancies.map(vacancy => (
            <li key={vacancy.childMarkdownRemark.frontmatter.title}>
              <a href={vacancy.childMarkdownRemark.frontmatter.pdf}>
                {vacancy.childMarkdownRemark.frontmatter.title}
              </a>
            </li>
          ))}
        </ul>
        {/* <ArticleList listOfArticles={articles} /> */}
      </article>
    </Layout>
  )
}

export default About
