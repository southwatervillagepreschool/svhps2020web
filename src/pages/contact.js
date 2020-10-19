import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PageArticles from "../components/PageArticles"

const Address = styled.address`
  font-size: 1.2em;
  display: flex;
  flex-direction: column;

  a {
    border: none;
    text-decoration: none;
    &::before {
      padding-right: 0.6rem;
    }
    padding: 0.6rem;
  }
  a[href^="mailto"]::before {
    content: "📧";
  }
  a[href^="tel"]::before {
    content: "📞";
  }
`

const Section = styled.section`
  padding: 2rem 0;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "contactPage" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
            }
            html
          }
        }
      }
      file(relativePath: { eq: "contact.jpg" }) {
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
        tagLine="Contact us"
      />
      <Section>
        <Address>
          <a href="mailto:southwaterpreschool@hotmail.co.uk">
            southwaterpreschool@hotmail.co.uk
          </a>
          <a href="tel:01403733954">01403 733954</a>
          <p>
            Southwater Village Hall Pre-School <br /> Church Lane <br />
            Southwater <br /> West Sussex <br /> RH13 9BT
          </p>
        </Address>
      </Section>
      <Section>
        <iframe
          title="southwater village preschool"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=southwater%20village%20hall+(Southwater%20Village%20Preschool)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </Section>
      <PageArticles listOfArticles={articles} />
    </Layout>
  )
}

export default Contact
